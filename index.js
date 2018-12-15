module.exports = function RequestLogs(mod) {
	const cmd = mod.command || mod.require.command;
	mod.hook('S_REQUEST_CONTRACT', 1, e => {
		let sender = e.senderName;
		switch (e.type) {
			case 3:
				cmd.message(sender + ' sent you a trade request at');
				break;
			case 4:
				cmd.message(sender + ' sent you a party invite at');
				break;
			case 5:
				cmd.message(sender + ' sent you a party joined at');
				break;
			case 11:
				cmd.message(sender + ' sent you a duel request at');
				break;
			case 18:
				cmd.message(sender + ' sent you a deathmatch invite at');
				break;
		}
	})
	
	function msglogs(msg) {
		let timeNow = new Date();
		let timeText = timeNow.getHours().toLocaleString(undefined, {minimumIntegerDigits: 2}) + ':' +
			timeNow.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2}) + ':' + 
			timeNow.getSeconds().toLocaleString(undefined, {minimumIntegerDigits: 2});
		cmd.message(' ' + msg + ' ' + timeText);
	}
}
