import dashboardDirectory from "../../support/PageObjects/dashboardDirectory.js";
import dashboardDirectoryData from "../../fixtures/dashboardDirectoryData.json";

describe('Directory Page Tests', () => {
  beforeEach(() => {
    dashboardDirectory.visit();
    dashboardDirectory.intercept();
    dashboardDirectory.InputUsernameLogin(dashboardDirectoryData.validUsername);
    dashboardDirectory.InputPasswordLogin(dashboardDirectoryData.validPassword);
    dashboardDirectory.Login_btn();
    dashboardDirectory.VerifyLoginSuccess(); 
    dashboardDirectory.DirectoryMenu();
    dashboardDirectory.viewDirectory();
  })
  

  it ('TC1 Mencari nama karyawan yang invalid dengan mengklik button search', () => {
    dashboardDirectory.searchByInvalidName(dashboardDirectoryData.InvalidEmployeeName);
    dashboardDirectory.Search_btn();
    dashboardDirectory.ResponseAPI();
    dashboardDirectory.VerifyUserNotFound();
    
  })

  it ('TC2 Mencari nama karyawan yang valid dengan mengklik button search', () => {
    dashboardDirectory.searchByValidName(dashboardDirectoryData.validSearch);
    dashboardDirectory.Search_btn();
    dashboardDirectory.ResponseAPI();
    dashboardDirectory.VerifyUserFound();
  })

  it ('TC3 Pencarian berdasarkan filter job', () =>{
    dashboardDirectory.FilterByJobList(dashboardDirectoryData.validSearch);
    dashboardDirectory.Search_btn();
    dashboardDirectory.ResponseAPI();
    dashboardDirectory.VerifyUserFound();
    
  })

  it ('TC4 Pencarian berdasarkan filter lokasi',() =>{
    dashboardDirectory.FilterByLocation(dashboardDirectoryData.validSearch);
    dashboardDirectory.Search_btn();
    dashboardDirectory.ResponseAPI();
    dashboardDirectory.VerifyUserFound();
  })

  it ('TC5 pencarian berdasarkan Nama, filter job, dan lokasi yang valid',()=> {
    dashboardDirectory.SearchByAllItemsValid(dashboardDirectoryData.validSearch);
    dashboardDirectory.Search_btn();
    dashboardDirectory.ResponseAPI();
    dashboardDirectory.VerifyUserFound();


  })
  it ('TC6 pencarian berdasarkan Nama, filter job, dan lokasi yang invalid',()=> {
    dashboardDirectory.SearchByAllItemsInvalid(dashboardDirectoryData.InvalidSearch);
    dashboardDirectory.Search_btn();
    dashboardDirectory.ResponseAPI();
    dashboardDirectory.VerifyUserNotFound();
    
})

  it ('TC7 Reset filter pencarian berdasarkan nama', () => {
    dashboardDirectory.ResetFilterByName();
    dashboardDirectory.Reset_btn();
    dashboardDirectory.ResponseAPI();

   
  })

  it ('TC8 Reset filter pencarian berdasarkan select job', () => {
    dashboardDirectory.ResetFilterByJobList();
    dashboardDirectory.Reset_btn();
    dashboardDirectory.ResponseAPI();

   
  })
  it ('TC9 Reset filter pencarian berdasarkan select lokasi', () => {
    dashboardDirectory.ResetFilterByLocation();
    dashboardDirectory.Reset_btn();
    dashboardDirectory.ResponseAPI();

    
  })

  it.only ('TC10 Lihat detail karyawan dari Directory', () => {
    dashboardDirectory.SearchByAllItemsValid(dashboardDirectoryData.validSearch);
    dashboardDirectory.Search_btn();
    dashboardDirectory.ResponseAPI();
    dashboardDirectory.VerifyUserFound();
    dashboardDirectory.ViewEmployeeDirectory();
   
})

});
