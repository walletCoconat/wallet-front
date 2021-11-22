import axios from "axios";

axios.defaults.baseURL = "https://wallet-coconat.herokuapp.com";


export class TransactionApi {
  constructor() {
    this.page = 1;
    this.perPage = 10;
    // this.year =
    // this.month = 
  }

  async getTransactions() {
   const { data } = await axios.get(`/api/transaction/?offset=${this.page}&limit=${this.perPage}`)
   return data;
  }

  async postTransaction(newTransaction) {
    const { data } = await axios.post("/api/transaction/", newTransaction);
    return data;
  }

  async getStatistic() {
    const { data } = await axios.get("/api/transaction/statistic")
    return data;
  }
  
 incrementPage() {
    this.page += 1;
  }
}