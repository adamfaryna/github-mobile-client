/*
 * Copyright (C) 2017 Adam Faryna <adamfaryna@appdy.net>
 *
 * Distributed under terms of the Proprietary license.
 */

import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import {
  LoginScreen,
  MainScreen,
  OrganizationsListScreen,
  ProfileScreen,
  RepositoriesListScreen,
  RepositoryDetailsScreen
} from './screens';

const RepositoriesNavigator = StackNavigator({
	Repositories: {
		screen: RepositoriesListScreen
	},
	Repository: {
		screen: RepositoryDetailsScreen
	}
});

const MainNavigator = TabNavigator({
	Organizations: {
		screen: OrganizationsListScreen,
		navigationOptions: {
			headerTitle: 'Organizations'
		}
	},
	Repositories: {
		screen: RepositoriesNavigator,
		navigationOptions: {
			headerTitle: 'Repositories'
		}
	},
	Profile: {
		screen: ProfileScreen,
		navigationOptions: {
			headerTitle: 'Profile'
		}
	}
});

const rootNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: 'Login'
    }
  },
  Main: {
    screen: MainNavigator,
    navigationOptions: {
      headerTitle: 'Main'
    }
  }
});

export default rootNavigator;
