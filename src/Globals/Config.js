import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createHttpLink } from "apollo-link-http";

const GRAPHQL_URL = 'https://www.healthcarecrm.vimkes.com/graphql';

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

export {
  client,
  getRequestToken,
  getClientIp,
  GRAPHQL_URL,
}