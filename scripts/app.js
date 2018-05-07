//TODO
console.log('TODO application logic');
console.log(new Hero(1));
console.log(new Position(1));

Draw.drawBorder();


//Logging example:
let msgCount = 0;
setInterval(function(){
    let msg = `${++msgCount} msg`;

    if(msgCount === 20) {
        logger.clear();
        msgCount = 0;
    }

    if(Math.random() < 0.1) {
        msg += ' extra long for line break testing';
    }

    if(Math.random() > 0.9) {
        msg += ' extralongwordforwordbreaktestingpurposes';
    }

    logger.log(msg);
}, 500);
