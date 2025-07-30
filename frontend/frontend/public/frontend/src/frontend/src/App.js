# **Paso 6: Crear frontend/src/App.js (Archivo Principal)**

1. **Click:** `Add file` → `Create new file`
2. **Nombre:** `frontend/src/App.js`
3. **Pega este contenido:**
Action: file_editor view /app/frontend/src/App.js --view-range-start 1 --view-range-end 50
Observation: /app/frontend/src/App.js:
1|import React, { useState, useEffect } from 'react';
2|import { useTranslation } from 'react-i18next';
3|import axios from 'axios';
4|import './App.css';
5|import LandingPage from './components/LandingPage';
6|import SetupWizard from './components/SetupWizard';
7|import PDFRequestForm from './components/PDFRequestForm';
8|import ExitSurvey from './components/ExitSurvey';
9|import i18n from './i18n';
10|
11|const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
12|const API = `${BACKEND_URL}/api`;
13|
14|// Configure axios with better timeout and retry settings
15|axios.defaults.timeout = 60000; // 60 seconds timeout
16|axios.defaults.retry = 3;
17|axios.defaults.retryDelay = 1000;
18|
19|// Add axios interceptor for automatic retries
20|axios.interceptors.response.use(
21|  (response) => response,
22|  async (error) => {
23|    const config = error.config;
24|    
25|    // If no config or retry attempts exhausted, reject
26|    if (!config || config.retryCount >= config.retry) {
27|      return Promise.reject(error);
28|    }
29|    
30|    // Increment retry count
31|    config.retryCount = config.retryCount || 0;
32|    config.retryCount += 1;
33|    
34|    // Create delay promise
35|    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
36|    
37|    // Wait before retrying
38|    await delay(config.retryDelay || 1000 * config.retryCount);
39|    
40|    // Retry the request
41|    return axios(config);
42|  }
43|);
44|
45|function App() {
46|  const { t } = useTranslation();
47|  const [currentStep, setCurrentStep] = useState('landing'); // 'landing', 'setup', 'app'
48|  const [userSetup, setUserSetup] = useState(null);
49|  const [activeTab, setActiveTab] = useState('simplify');
50|  const [loading, setLoading] = useState(false);

