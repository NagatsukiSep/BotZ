module.exports = robot => {
    // "@botName hoge"を受け取ったら"@senderName fuga"を送り返す
    robot.respond(/hoge$/i, res => {
      res.reply("fuga");
    });

    // "@botName hoge fuga"を受け取ったら"@senderName fuga"を送り返す
    robot.respond(/hoge (.+)$/i, res => {
        res.reply(res.match[1]);
        });
  };