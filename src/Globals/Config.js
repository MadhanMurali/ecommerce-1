//This file contains some some cofigurations and frequently used global constants

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createHttpLink } from "apollo-link-http";
import { createContext } from 'react';

//constants
const GRAPHQL_URL = 'https://www.healthcarecrm.vimkes.com/graphql';
const GOOGLE_CLIENT_ID = '499502244846-qh11f356nmvglbs38cna4lnu1gc4os47.apps.googleusercontent.com';
const LOCAL_STORAGE_NAMES = {
  PREVIOUS_SIGN_IN_METHOD: "previous_sign_in_method",
  PREVIOUSLY_SIGNED_IN: "previously_signed_in",
}
const SIGN_IN_METHOD = {
  GOOGLE: "google",
  NATIVE: "native"
}

const link = createHttpLink({
  uri: GRAPHQL_URL,
  credentials: 'include'
});
  
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const getRequestToken = () => {
  var moment = require('moment');
  var now = moment(new Date()).format('MMM DD YYYY h:mm');
  var sha1 = require('sha1');
  sha1 = sha1(now + "vimkes");
  return sha1;
}

const getClientIp = async () => {
  const response = await fetch('https://api.ipify.org/?format=json');
  const data = await response.json();
  return data["ip"];
}

const GAuth2Context = createContext(undefined);

export {
  client,
  getRequestToken,
  getClientIp,
  GRAPHQL_URL,
  GOOGLE_CLIENT_ID,
  LOCAL_STORAGE_NAMES,
  SIGN_IN_METHOD,
  GAuth2Context
}