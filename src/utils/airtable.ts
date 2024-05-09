import axios from 'axios';

const BASE_URL = 'https://api.airtable.com/v0'; 
const API_KEY = 'patTfZWEPCNX3uIv4.cb6bc48250987758c5de339371bfaee4d7ec55ee1547491647bd7cbe4b0ac75d';
const BASE_ID = 'app2Ai3UwGOiSH6nv'; 
const TABLE_ID = 'tblulJmMq5OF7gDOu';

export const fetchTasks = async () => {
  try {
      const response = await axios.get(`${BASE_URL}/${BASE_ID}/${TABLE_ID}`, {
          headers: {
              Authorization: `Bearer ${API_KEY}`
          }
          
      });
      console.log(response.data.record);
      return response.data.records;
  } catch (error) {
      console.error('Error fetching tasks from Airtable:', error);
      return [];
  }
};

export const updateStatus = async (taskId: string, status: any) => {
  try {
      const response = await axios.patch(`${BASE_URL}/${BASE_ID}/${TABLE_ID}/${taskId}`, {
          fields: {
            Status: status
          }
      }, {
          headers: {
              Authorization: `Bearer ${API_KEY}`
          }
      });
      console.log(response.data)
      return response.data;
  }catch (error) {
      console.error('Error updating status to Airtable:', error);
  }
}