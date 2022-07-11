# Deltarealm-base64-keys

program works as single html document

### some instructions for use of the tool UI

Ship can be loaded from base64, file, from 'my ships' or when the page is loaded it's defaultly StarterShip. So can be created base64 or file of loaded ship.

List of elememnts in there:

1. text input - 'input': works as input/output for base64.
2. 'file input': File(s) are loaded there. If multiple files are opened, later only file(s) which are needed will be selected.
3. 'ship functions': buttons to convert loaded ship from/to base64 or file. Ship converted to file 'JSON File of ship' will appear to for download in 'file output'.
4. 'ship.name' input: converting loaded ship uses that name if there is one.
5. 'width, height, back...': are inputs for displaying function (not functional/disabled feature)
6. 'file output': created files will appear there.
7. 'my ships': buttons loading other ship stored in this html document.
8. 'for ships' functions: buttons allowing to: open more ship at once and replace current 'my ships' with them, opening more throught csv file of ships, adding loaded ship to 'my ships', creates file of ships from 'my ships' (appears in file output'.
9. If functions aren't used properly or error occurs the error will appear below.
10. not working commandline at the bottom accepts:
    - `from:<slot key>` Reads ship from slot by key.
    - `to:<slot key>` Writes ship to slot by key.  
    Slots (localStorage items) are stored localy per site.
    - `autoScroll` Changes autoscroll setting to next option.  

Link to this [Deltarealm ship base64 keys tool](https://KaaBEL.github.io/Deltarealm-b64-keys) as GitHub page.
