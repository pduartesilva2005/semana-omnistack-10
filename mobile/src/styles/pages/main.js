import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: "#fff",
  },

  callout: {
    width: 260,
  },

  devName: {
    fontFamily: "Roboto_700Bold",
    fontSize: 16,
  },

  devBio: {
    color: "#666",
    marginTop: 5,
    fontFamily: "Roboto_400Regular",
  },

  devTechs: {
    marginTop: 5,
    fontFamily: "Roboto_400Regular",
  },

  searchForm: {
    position: "absolute",
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: "row",
  },

  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: "#fff",
    color: "#333",
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 14,
    fontFamily: "Roboto_400Regular",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
  },

  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: "#8e4dff",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
});

export default styles;
