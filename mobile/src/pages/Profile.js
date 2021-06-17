import React from "react";
import { WebView } from "react-native-webview";

import styles from "../styles/pages/profile";

export default function Profile({ navigation }) {
  const githubUsername = navigation.getParam("github_username");

  return (
    <WebView
      style={styles.container}
      source={{ uri: `https://github.com/${githubUsername}` }}
    />
  );
}
