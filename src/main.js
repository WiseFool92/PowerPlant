import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { stateChanger, blueFood, giveLight, hydrate, storeState, initialPlantState, giveName, waterRentention, soilBoost, canCharge } from "./plant.js";

$(document).ready(function () {

  const tree = storeState(initialPlantState);
  const shrub = storeState(initialPlantState);
  const flower = storeState(initialPlantState);
  
  $("#feed").click(function () {
    var radioValue = $("input[name='plant-choice']:checked").val();
    
    const thisTreeName = tree(giveName(() => console.log("whatup")));

    // const theTreeSays = thisTreeName.ability;
    // console.log(theTreeSays);
    //console.log(thisTreeName.name);

    let modifer;
    let temp;
    switch (radioValue) {
      case "tree":
        temp = tree;
        modifer = 1;
      break;
      case "shrub":
        temp = shrub;
        modifier = 3;
      break;
      case "flower":
        temp = flower;
        modifier = 1;
      break;
      default:
      break;
    }
    
    const thisPlant = temp(blueFood(modifier));
    
    $("#"+ radioValue + "-soil-value").text(thisPlant.soil);
  });

  $("#hydrate").click(function () {
    var radioValue = $("input[name='plant-choice']:checked").val();

    let modifier;
    let temp;
    switch (radioValue) {
      case "tree":
        temp = tree;
        modifier = 4;
      break;
      case "shrub":
        temp = shrub;
        modifer = 1;
      break;
      case "flower":
        temp = flower;
        modifier = 1;
      break;
      default:
      break;
    }
    
    const thisPlant = temp(hydrate(modifer));
    $("#"+ radioValue + "-water-value").text(thisPlant.water);
  });

  $("#giveLight").click(function () {
    var radioValue = $("input[name='plant-choice']:checked").val();

    let modifier;
    let temp;
    switch (radioValue) {
      case "tree":
        temp = tree;
        modifier = 1;
      break;
      case "shrub":
        temp = shrub;
        modifer = 1; 
      break;
      case "flower":
        temp = flower;
        modifier = 2;
      break;
      default:
      break;
    }
    
    const thisPlant = temp(giveLight(modifer));
    $("#"+ radioValue + "-light-value").text(thisPlant.light);
  });
});