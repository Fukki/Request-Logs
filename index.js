module.exports = function RequestLogs(mod) {
	const cmd = mod.command || mod.require.command;
	
	mod.hook('S_REQUEST_CONTRACT', 1, e => {
		let sender = e.senderName;
		switch (e.type) {
			case 3:
				msglogs(sender + ' sent you a trade request at');
				break;
			case 11:
				msglogs(sender + ' sent you a duel request at');
				break;
			case 18:
				msglogs(sender + ' sent you a deathmatch invite at');
				break;
		}
	});
	
	mod.hook('S_BEGIN_THROUGH_ARBITER_CONTRACT', 1, e => {
		let sender = e.sender;
		switch (e.type) {
			case 4:
				msglogs(sender + ' sent you a party invite at');
				break;
			case 5:
				msglogs(sender + ' sent you a party joined at');
				break;
		}
	});
	
	function msglogs(msg) {
		let timeNow = new Date();
		let timeText = timeNow.getHours().toLocaleString(undefined, {minimumIntegerDigits: 2}) + ':' +
			timeNow.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2}) + ':' + 
			timeNow.getSeconds().toLocaleString(undefined, {minimumIntegerDigits: 2});
		cmd.message(' ' + msg + ' ' + timeText);
	}
}
