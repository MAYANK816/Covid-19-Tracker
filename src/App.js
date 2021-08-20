import React, { useEffect , useState } from "react";
import "./App.css";


function App() {
  const [data,setdata]=useState([]);
  const getData = async () => {
    try {
      const result = await fetch("https://data.covid19india.org/data.json");
      const actualData = await result.json();
      console.log(actualData.statewise[0]);
      setdata(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (

      <div className="body">
        <h2>🔴 Live Covid-19 Tracker</h2>
        <div class="container-fluid">
      <h1 class="mt-4 text-white  ">DashBoard</h1>
      <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active ">Live Data Of Our Country</li>
      </ol>
      <div class="row">
          <div class="col-xl-3 col-md-6">
              <div class="card bg-primary text-white mb-4">
                  <div class="card-body">Total Active</div>
                  <div class="card-footer d-flex align-items-center justify-content-between">
                      <a class="small text-white stretched-link" href="#">{data.active}</a>
                      
                  </div>
              </div>
          </div>
          <div class="col-xl-3 col-md-6">
              <div class="card bg-success text-white mb-4">
                  <div class="card-body">Recovered Cases</div>
                  <div class="card-footer d-flex align-items-center justify-content-between">
                      <a class="small text-white stretched-link" href="#">{data.recovered}</a>
                     
                  </div>
              </div>
          </div>
          <div class="col-xl-3 col-md-6">
              <div class="card bg-warning text-white mb-4">
                  <div class="card-body">Confirmed Cases</div>
                  <div class="card-footer d-flex align-items-center justify-content-between">
                      <a class="small text-white stretched-link" href="#">{data.confirmed}</a>
                      
                  </div>
              </div>
          </div>
          <div class="col-xl-3 col-md-6">
              <div class="card bg-danger text-white mb-4">
                  <div class="card-body">Total Death</div>
                  <div class="card-footer d-flex align-items-center justify-content-between">
                      <a class="small text-white stretched-link" href="#">{data.deaths}</a>
                      
                  </div>
              </div>
          </div>
          <div class="col-xl-3 col-md-6">
              <div class="card bg-info text-white mb-4">
                  <div class="card-body">Last UpdatedTime</div>
                  <div class="card-footer d-flex align-items-center justify-content-between">
                      <a class="small text-white stretched-link" href="#">{data.lastupdatedtime}</a>
                      
                  </div>
              </div>
          </div>
      </div>
      </div>
</div>
  );
}

export default App;
