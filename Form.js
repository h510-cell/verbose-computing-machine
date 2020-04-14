class Form{

  constructor(){
    this.input=createInput("Name");
    this.button=createButton('Run');
    this.greeting=createElement('h2');
    this.title=createElement('h2');
    this.competeter=createButton('Competeter');
    this.reset=createButton('reset');
    this.pause=createButton('pause');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.competeter.hide();
    this.pause.hide();
    this.title.hide();
  }

  display(){
    var title=createElement('h2');
    title.html("Hurdle Race");
    title.position(displayWidth/2-50,0);

    this.input.position(displayWidth/2-40,displayHeihgt/2-80);
    this.button.position(displayWidth/2+30,displayHeihgt/2);
    this.competeter.position(displayWidth/2+50,displayHeihgt/2);
    this.reset.position(displayWidth-100,20);
    this.pause.position(displayWidth+100,20);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.competeter.hide();
      player.name=this.input.value();
      playerCount+=1;
      player.index=playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello"+player.name);
      this.greeting.position(displayWidth/2-70,displayHeihgt/2);
    });
      this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      });
      this.pause.mousePressed(()=>{
        player.updateCount(1);
        game.update(1);
        });
  }
} 