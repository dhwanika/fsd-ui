/*eslint-disable*/
import axios from 'axios';
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.get.Accept = 'application/json';

/*  IMPORTANT!!!!
 *  Change ENVIRONMENT to 'local' for local development
 *  Change ENVIRONMENT to 'gateway' before pushing to bitbucket
*/
export const ENVIRONMENT = 'local';


export const IDM_HOME_URL = IDM_HOME_SYS;

export const config = {
  headers: {
    Accept: 'application/json',
    Pragma: 'no-cache',
    Authorization: 'Bearer Ol1hZ9uCmLJB8Oy4QDIWZC3t4XNr'
  }
};

export const axiosApiInstance = axios.create({
  baseURL: 'https://idm-verification.apps.system.pcf.ntrs.com'
});

export const axiosGatewayInstance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});

export const axiosDelegateInstance = axios.create({
  baseURL: 'https://idm-delegates.apps.system.pcf.ntrs.com'
});

export const redirectToError = () => <ErrorBoundary />;

export const getData = urlPath => axios.get(urlPath).catch(redirectToError);

export const getDataApi = urlPath => {
  if (ENVIRONMENT === 'local') {
    return axiosApiInstance.get(urlPath, config).catch(redirectToError);
  } else {
    return axiosGatewayInstance.get(urlPath, config).catch(redirectToError);
  }
};
export const putDataApi = (urlPath, data) => {
  if (ENVIRONMENT === 'local') {
    return axiosApiInstance.put(urlPath, data, config).catch(redirectToError);
  } else {
    return axiosGatewayInstance.put(urlPath, data, config).catch(redirectToError);
  }
};

export const postDataApi = (urlPath, data) => {
  if (ENVIRONMENT === 'local') {
    return axiosApiInstance.post(urlPath, data, config).catch(redirectToError);
  } else {
    return axiosGatewayInstance.post(urlPath, data, config).catch(redirectToError);
  }
};
export const deleteDataApi = urlPath => {
  if (ENVIRONMENT === 'local') {
    return axiosApiInstance.delete(urlPath, config).catch(redirectToError);
  } else {
    return axiosGatewayInstance.delete(urlPath, config).catch(redirectToError);
  }
};

export const getDataDelegateApi = urlPath => {
  if (ENVIRONMENT === 'local') {
    return axiosDelegateInstance.get(urlPath, config).catch(redirectToError);
  } else {
    return axiosGatewayInstance.get(urlPath, config).catch(redirectToError);
  }
};
export const putDataDelegateApi = (urlPath, data) => {
  if (ENVIRONMENT === 'local') {
    return axiosDelegateInstance.put(urlPath, data, config).catch(redirectToError);
  } else {
    return axiosGatewayInstance.put(urlPath, data, config).catch(redirectToError);
  }
};

export const postDataDelegateApi = (urlPath, data) => {
  if (ENVIRONMENT === 'local') {
    return axiosDelegateInstance.post(urlPath, data, config).catch(redirectToError);
  } else {
    return axiosGatewayInstance.post(urlPath, data, config).catch(redirectToError);
  }
};
export const deleteDataDelegateApi = urlPath => {
  if (ENVIRONMENT === 'local') {
    return axiosDelegateInstance.delete(urlPath, config).catch(redirectToError);
  } else {
    return axiosGatewayInstance.delete(urlPath, config).catch(redirectToError);
  }
};
