import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import AlbumOfTheWeekOverview from "../screens/AlbumOfTheWeekOverview";
import AlbumOfTheWeekDetails from "../screens/AlbumOfTheWeekDetails";

const screens = {
    AlbumOverview: {
        screen: AlbumOfTheWeekOverview
    },
    AlbumDetails: {
        screen: AlbumOfTheWeekDetails
    }
}

const albumOfTheWeekStack = createStackNavigator(screens);

export default createAppContainer(albumOfTheWeekStack);