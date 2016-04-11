# damson-send-message

## Information

<table>
<tr> 
<td>Package</td><td>damson-send-message</td>
</tr>
<tr>
<td>Description</td>
<td>Damson send message task</td>
</tr>
</table>

## run(driver, options)

```javascript
var SendMessage = require('damson-send-message');
var sendMessage = new SendMessage();
var CliDriver = require('damson-driver-cli');
var cli = new CliDriver();

sendMessage.run(cli, { message: 'Hello!' });
```

```javascript
var SendMessage = require('damson-send-message');
var CliDriver = require('damson-driver-cli');
var damson = require('damson-core');

damson.registerDriver(CliDriver, 'cli');
damson.registerTask(SendMessage, 'send');

damson.run('send', { message: 'Hello' }, 'cli');
```