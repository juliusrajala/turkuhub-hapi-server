var Node = function(object){
  for(var key in object){
    this[key] = object[key];
  }
};

var NodeList = function(k){
  this.nodes = [];
  this.k = k;
}

NodeList.prototype.add = function(node){
  this.nodes.add(node);
}

//Finds minimum and maximum values for the rooms and areas.
NodeList.prototype.calculateRanges = function(){
  this.areas = {min: 1000000, max: 0};
  this.rooms = {min: 1000000, max: 0};
  for(var i in this.nodes){
    //If the rooms on this node are less than the room min
    //sets the smaller node as the minimum
    if(this.nodes[i].rooms < this.rooms.min){
      this.rooms.min = this.nodes[i].rooms;
    }
    //Does the same as above but seeks for the max
    if(this.nodes[i].rooms > this.rooms.max){
      this.rooms.max = this.nodes[i].rooms;
    }
    //Same as the first if-structure for the areas
    if(this.nodes[i].area < this.areas.min){
      this.areas.min = this.nodes[i].area;
    }
    //Follows earlier structure.
    if(this.nodes[i].area > this.areas.max){
      this.areas.max = this.nodes[i].area;
    }
  }
}

function populateNodeList(data){
  for(key in data){
    NodeList.add(Node(data[key]));
  }
}

var data = [
    {rooms: 1, area: 350, type: 'apartment'},
    {rooms: 2, area: 300, type: 'apartment'},
    {rooms: 3, area: 300, type: 'apartment'},
    {rooms: 4, area: 250, type: 'apartment'},
    {rooms: 4, area: 500, type: 'apartment'},
    {rooms: 4, area: 400, type: 'apartment'},
    {rooms: 5, area: 450, type: 'apartment'},

    {rooms: 7,  area: 850,  type: 'house'},
    {rooms: 7,  area: 900,  type: 'house'},
    {rooms: 7,  area: 1200, type: 'house'},
    {rooms: 8,  area: 1500, type: 'house'},
    {rooms: 9,  area: 1300, type: 'house'},
    {rooms: 8,  area: 1240, type: 'house'},
    {rooms: 10, area: 1700, type: 'house'},
    {rooms: 9,  area: 1000, type: 'house'},

    {rooms: 1, area: 800,  type: 'flat'},
    {rooms: 3, area: 900,  type: 'flat'},
    {rooms: 2, area: 700,  type: 'flat'},
    {rooms: 1, area: 900,  type: 'flat'},
    {rooms: 2, area: 1150, type: 'flat'},
    {rooms: 1, area: 1000, type: 'flat'},
    {rooms: 2, area: 1200, type: 'flat'},
    {rooms: 1, area: 1300, type: 'flat'},
];

populateNodeList(data);