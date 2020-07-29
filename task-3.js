'use strict';
const Guest = function(name, room) {
    this.name = name;
    this.room = room;
  };
  
  const mango = new Guest('Mango', 28);
  
  console.log(mango);