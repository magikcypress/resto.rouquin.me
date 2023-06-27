//    CONFIGURATION

const TENANT = '';
const WEBINTEGRATIONID = '';
const APPID = '';
const SHEETID = '';
// const IDENTITY = '<identity>';

//    DEFAULT PLACEMENT CONFIGURATION

const qlikDivSelector = '#sheet';
const qlikObjectClass = 'qlikObject';

//    MAIN

(async function main() {
    const isLoggedIn = await qlikLogin();
    const loadedCapabilitiesAssets = await loadCapabilitiesAssets();
    const app = await doCapabilities(APPID, qlikDivSelector, qlikObjectClass);
})();

//    LOGIN

async function qlikLogin() {
    const loggedIn = await fetch(`https://${TENANT}/api/v1/users/me`, {
        mode: 'cors',
        credentials: 'include',
        headers: {
            'qlik-web-integration-id': WEBINTEGRATIONID,
        },
    })
    if (loggedIn.status !== 200) {
        if (sessionStorage.getItem('tryQlikAuth') === null) {
            sessionStorage.setItem('tryQlikAuth', 1);
            window.location = `https://${TENANT}/login?qlik-web-integration-id=${WEBINTEGRATIONID}&returnto=${location.href}`;
            return await new Promise(resolve => setTimeout(resolve, 10000)); // prevents further code execution
        } else {
            sessionStorage.removeItem('tryQlikAuth');
            const message = 'Third-party cookies are not enabled in your browser settings and/or browser mode.';
            alert(message);
            throw new Error(message);
        }
    }
    sessionStorage.removeItem('tryQlikAuth');
    console.log('Logged in!');
    return true;
}

// CREATE GRID

function createGrid(querySelector, columns, rows) {
    const gridContainer = document.querySelector(querySelector);
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateRows = `repeat(${rows}, minmax(0, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, minmax(0, 1fr))`;

    return gridContainer;
}

// CONSTRUCT SHEET

function constructSheet(sheetLayout, querySelector, addClass) {
    const gridContainer = createGrid(querySelector, sheetLayout.columns, sheetLayout.rows);
    (sheetLayout.cells).forEach(function (object) {
        const objectId = object.name;
        const colStart = object.col + 1;
        const rowStart = object.row + 1;
        const colSpan = object.colspan;
        const rowSpan = object.rowspan;
        const objectDiv = document.createElement('div');
        objectDiv.id = objectId;
        objectDiv.style["grid-column"] = `${colStart} / span ${colSpan}`;
        objectDiv.style["grid-row"] = `${rowStart} / span ${rowSpan}`;
        objectDiv.style.border = '2px solid #0000';
        objectDiv.style.margin = '5px';
        objectDiv.classList.add(addClass);
        gridContainer.appendChild(objectDiv);
    })
    return true;
}

// LOAD & RENDER CAPABILITIES


async function loadCapabilitiesAssets() {
    const cssUrl = ``;
    const requireUrl = `https://${TENANT}/resources/assets/external/requirejs/require.js`;
    return $.when(
        $('head').append(`<link rel="stylesheet" type="text/css" href="${cssUrl}">`),
        $.getScript(requireUrl)
    );
}

async function doCapabilities(appId, qlikDivSelector, objectClass) {
    var config = {
        host: TENANT,
        prefix: "/",
        port: 443,
        isSecure: true,
        webIntegrationId: WEBINTEGRATIONID,
        //identity: IDENTITY
    };

    require.config({
        config: {
            text: { useXhr: function (url, protocol, hostname, port) { return true; } }
        },
        baseUrl: 'https://' + config.host + (config.port ? ':' + config.port : '') + config.prefix + 'resources',
        webIntegrationId: WEBINTEGRATIONID
    });

    requirejs(["js/qlik"], (qlik) => {
        const app = qlik.openApp(appId, config);
        const sheetObject = app.getObject(SHEETID)
            .then((sheetObject) => {
                const sheetLayout = sheetObject.getLayout()
                    .then((sheetLayout) => {
                        constructSheet(sheetLayout, qlikDivSelector, objectClass);
                        $(`.${objectClass}`).each(function () {
                            var chartId = $(this).attr("id");
                            app.getObject(this, chartId);
                        });
                    })
            })
    })
}