
# Cookie AsciiDoc & CSV Exporter for Firefox

A Firefox extension that allows you to export cookies for the active domain in either AsciiDoc or CSV formats. This extension is designed for ease of use, providing straightforward data exports for documentation or reporting purposes.

## Features

- Export cookies in AsciiDoc or CSV format
- Simple interface with export buttons for cookies
- Copy-paste friendly table formats

## Installation

1. Clone or download this repository.
2. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
3. Select **Load Temporary Add-on…** and choose the `manifest.json` file from the downloaded directory.
4. The extension icon should now appear in the toolbar.

## Usage

1. Go to any site where you want to export cookies.
2. Click on the extension icon in the toolbar.
3. Use one of the following options:
   - **Export Cookies to AsciiDoc**: Creates a table of cookies in AsciiDoc format.
   - **Export Cookies to CSV**: Creates a CSV file of cookies.
4. Copy the output from the respective text area as needed.

## Video Time

https://github.com/user-attachments/assets/af415f8b-b5fb-43a4-a1b5-c3d618d94144

## Example Output

### AsciiDoc Table:
```
|===
| Name | Value | HttpOnly | Secure | SameSite

| cookieName | cookieValue | true/false | true/false | None/Strict/Lax
|===
```

### CSV:
```
Name,Value,HttpOnly,Secure,SameSite
cookieName,cookieValue,true/false,true/false,None/Strict/Lax
```

## Files

- **manifest.json**: Defines extension permissions and settings.
- **popup.html**: Popup UI for the extension.
- **background.js**: Script handling the data collection and formatting.

## Development

1. Clone the repository.
2. Modify `background.js` for data handling or `popup.html` for the UI.
3. Reload the extension in Firefox after changes by selecting **Load Temporary Add-on…** and reloading `manifest.json`.

## Troubleshooting

- Ensure permissions for `cookies` and `activeTab` are set in `manifest.json`.
- Reload the extension if updates aren’t appearing by reloading `manifest.json` in `about:debugging#/runtime/this-firefox`.

## Contributing

Contributions are welcome! Fork the repository, make updates, and submit a pull request.

## License

This project is open for public use and can be freely used, modified, and distributed without restrictions.
