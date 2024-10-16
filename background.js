document.addEventListener("DOMContentLoaded", function() {
    const exportButtonAscii = document.getElementById("exportButtonAscii");
    const exportButtonCSV = document.getElementById("exportButtonCSV");

    if (exportButtonAscii) {
        exportButtonAscii.addEventListener("click", exportCookiesToAsciiDoc);
    }

    if (exportButtonCSV) {
        exportButtonCSV.addEventListener("click", exportCookiesToCSV);
    }
});

async function exportCookiesToAsciiDoc() {
    let [tab] = await browser.tabs.query({ active: true, currentWindow: true });
    let url = new URL(tab.url);
    let domain = url.hostname;
    let cookies = await browser.cookies.getAll({ domain: domain });

    let asciiDoc = `|===
| Name | Value | Domain | Path | Expires/Max-Age | Size | HttpOnly | Secure | SameSite | Last Accessed

`;

    cookies.forEach(cookie => {
        asciiDoc += `| ${cookie.name} | ${cookie.value} | ${cookie.domain} | ${cookie.path} | ${cookie.expirationDate || 'Session'} | ${cookie.size} | ${cookie.httpOnly} | ${cookie.secure} | ${cookie.sameSite || 'None'} | ${cookie.lastAccessed || 'N/A'}\n`;
    });

    asciiDoc += `|===`;

    const cookieTableAscii = document.getElementById("cookieTableAscii");
    if (cookieTableAscii) {
        cookieTableAscii.value = asciiDoc;
    }
}

async function exportCookiesToCSV() {
    let [tab] = await browser.tabs.query({ active: true, currentWindow: true });
    let url = new URL(tab.url);
    let domain = url.hostname;
    let cookies = await browser.cookies.getAll({ domain: domain });

    // Prepare CSV header
    let csv = "Name,Value,Domain,Path,Expires/Max-Age,Size,HttpOnly,Secure,SameSite,Last Accessed\n";

    // Add each cookie's data as a row
    cookies.forEach(cookie => {
        csv += `"${cookie.name}","${cookie.value}","${cookie.domain}","${cookie.path}","${cookie.expirationDate || 'Session'}","${cookie.size}","${cookie.httpOnly}","${cookie.secure}","${cookie.sameSite || 'None'}","${cookie.lastAccessed || 'N/A'}"\n`;
    });

    const cookieTableCSV = document.getElementById("cookieTableCSV");
    if (cookieTableCSV) {
        cookieTableCSV.value = csv;
    }
}