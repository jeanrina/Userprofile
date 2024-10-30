import React, { useState, useContext, createContext } from 'react';
import { View, Text, StyleSheet, Image, Switch, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const ThemeContext = createContext();

const UserProfile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle function for dark mode switch
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <ProfileScreen />
    </ThemeContext.Provider>
  );
};

const ProfileScreen = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  // Styles based on theme
  const themeStyles = isDarkMode ? darkStyles : lightStyles;

  return (
    <View style={[styles.container, themeStyles.container]}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* Replace with your image path or URL */}
        <Image
            source={require('./assets/profile.jpg')}
            style={styles.profileImage}
       />
        <TouchableOpacity style={styles.cameraIcon}>
          <Icon name="camera-outline" size={24} color={themeStyles.iconColor.color} />
        </TouchableOpacity>
        <Text style={[styles.userName, themeStyles.text]}>Jeany Enterina</Text>
      </View>

      {/* Options Section */}
      <View style={styles.optionsContainer}>
        <OptionItem
          title="Dark mode"
          value={isDarkMode ? 'On' : 'Off'}
          iconName="moon-outline"
          toggleSwitch={toggleDarkMode}
          isSwitch
          switchValue={isDarkMode}
        />
        <OptionItem
          title="Active status"
          value="On"
          iconName="ellipse-outline"
        />
        <OptionItem
          title="Username"
          value="m.me/jeany.enterina"
          iconName="at-outline"
        />

        {/* Separator */}
        <Text style={[styles.sectionTitle, themeStyles.text]}>For families</Text>
        <OptionItem
          title="Supervision"
          iconName="home-outline"
        />

        {/* Services */}
        <Text style={[styles.sectionTitle, themeStyles.text]}>Services</Text>
        <OptionItem
          title="Orders"
          iconName="bag-outline"
        />
        <OptionItem
          title="Payments"
          iconName="card-outline"
        />
      </View>
    </View>
  );
};

// Component for each option row
const OptionItem = ({ title, value, iconName, toggleSwitch, isSwitch, switchValue }) => {
  return (
    <View style={styles.optionItem}>
      <Icon name={iconName} size={24} color="#555" />
      <View style={styles.optionTextContainer}>
        <Text style={styles.optionTitle}>{title}</Text>
        {value && <Text style={styles.optionValue}>{value}</Text>}
      </View>
      {/* Toggle Switch if it's a switch item */}
      {isSwitch && (
        <Switch
          value={switchValue}
          onValueChange={toggleSwitch}
        />
      )}
    </View>
  );
};

// Common Styles for components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  cameraIcon: {
    position: 'absolute',
    right: 10,
    top: 70,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 20,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  optionsContainer: {
    marginTop: 10,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionTextContainer: {
    flex: 1,
    marginLeft: 15,
  },
  optionTitle: {
    fontSize: 16,
  },
  optionValue: {
    fontSize: 14,
    color: '#888',
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
});

// Light and Dark Styles
const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
  },
  iconColor: {
    color: '#000',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
  },
  text: {
    color: '#fff',
  },
  iconColor: {
    color: '#fff',
  },
});

export default UserProfile;
