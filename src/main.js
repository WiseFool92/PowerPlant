import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { blueFood, giveLight, hydrate, storeState, initialPlantState } from "./plant.js";
import { sstoreState, cchangeState, iinitialPlantState} from "./plant2.js";

$(document).ready(function () {

  // Array Testing
  //  const anyVariable = sstoreState(iinitialPlantState);
  //  const oneMoreVariable = cchangeState(4)(99);
  //  console.log(`||||||||||||||||||||||||||||||||||||||||| ${anyVariable(oneMoreVariable)}`);
  // Array Testing

  const tree = storeState(initialPlantState);
  const shrub = storeState(initialPlantState);
  const flower = storeState(initialPlantState);
  
  $("#feed").click(function () {
    var radioValue = $("input[name='plant-choice']:checked").val();
    
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