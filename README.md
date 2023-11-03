# Deltarealm-base64-keys

program works as single html document  

### some instructions for use of the tool UI

Ship can be loaded either from base64, file, from 'my ships' or when the page is loaded it's defaultly StarterShip. So can be created base64 or file of loaded ship.  

List of elememnts in there:  

1. text input - 'input': works as input/output for base64 and other.  
2. 'file input': File(s) are loaded there. If multiple files are opened, later only file(s) which are needed will be selected.  
3. 'ship functions': buttons to convert loaded ship from/to base64 or file. Ship converted to file 'JSON File of ship' will appear for download in 'file output' as `.json` file and preview image as `.png` file, both represent ship as in game savefiles.  
4. 'ship.name' input: converting loaded ship uses that name if there is one. 'ship size' underneath is for displaying block amount of current loaded ship.  
5. 'width, height, backgr...': are inputs for (unpresent/disabled feature) function displaying the ship, however color will be used in preview image.  
6. 'file output': created files will appear there waiting to be downloaded.  
7. 'my ships': buttons loading other ships stored in this html document.  
8. 'for ships' functions: buttons allowing to: open more ship files easily even whole folder at once and allows to replace current 'my ships' with them, opening more throught CSV file of ships, 'add ship to ships' adds loaded ship to 'my ships', 'CSV file of all ships' creates CSV file of ships from 'my ships' (appears in file output) uses text from text input as file name if there is and is shorter than 128 characters.  
9. If functions aren't used properly or error occurs the error will appear below.  
10. 'HTML document' download: uses XML http request to get html file source of the page. Downloaded file can be reliably opened offline (no internet required).  
11. 'not working commandline' at the bottom accepts:  
    - `from:<id>` Reads ship from slot by id (slot key).  
    - `to:<id>` Writes ship to slot by id (slot key). Writes either base64 code from input, or if input is empty it's ship as JSON, which takes more space.  
    Slots (localStorage items) are stored localy on device and per site.  
    - `autoScroll` Changes autoscroll setting to next option: all, none, (only) critical.  

Link to this [Deltarealm ship base64 keys tool](https://KaaBEL.github.io/Deltarealm-b64-keys/) as GitHub page.  

If you are wondering how to acces the game ship files (savefiles), here is video tutorial https://youtu.be/1PyL0NlgpYo for android, LDplayer and with some additional tips.
