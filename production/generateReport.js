const fs = require("fs");
const path = require("path");
const pdf = require("html-pdf");
var options = { format: "A4", base: __dirname };

function createPdfs(contact) {
  return new Promise((resolve, reject) => {
    var html = formatPdf(contact);
    const pdfName = `${contact.last_name}${contact.first_name}${contact.order_id}`;
    const path = `reports/${pdfName}.pdf`;
    pdf.create(html, options).toStream(function (err, stream) {
      if (err) {
        reject(err);
      }
      stream.pipe(fs.createWriteStream(path));
      resolve({ name: pdfName, path: path });
    });
  });
}

function formatPdf(contact) {
  const html = `
  <html>
  
  <head>
     <style>
     html{
      zoom: 0.6;
     }
        @import url(https://fonts.googleapis.com/css?family=Open+Sans);
        * {
        box-sizing: border-box;
       }
        table {
           font-family: arial, sans-serif;
           border-collapse: collapse;
        }
        .column {
          float: left;
          width: 50%;
          padding: 5px;
        }
        
        /* Clearfix (clear floats) */
        .row::after {
          content: "";
          clear: both;
          display: table;
        }
        body {
           font-family: 'Open Sans', serif;
           font-size:12px;
        }
  
        td,
        th {
           border: 1px solid #dddddd;
           text-align: left;
           padding: 8px;
        }
     </style>
  </head>
  
  <body>
  <div style="width: 250px;
   margin: auto;">
      <img style="width: 100%; height: auto;" src="https://mkcovid19.com/logo.png" />
   </div>
  
  
  <table style="width: 100%;">
  <tr style="background-color: #bdd8f7;">
     <th colspan="3">Client: ${contact.location} </th>
  </tr>
  <tr>
     <td>Client Code: </td>
     <td colspan="2">Supervised By: Manager on duty</td>

  </tr>
  <tr>
     <td>Address: 2358 Hassell Rd. Hoffman Estates, IL 60169</td>
     <td>Phone: 847-636-2667 </td>
     <td>Fax: </td>
  </tr>

</table>
     <div class="row">
       <div class="column">
        <table style="width: 100%;height: 300px;">
           <tr style="background-color: #bdd8f7;">
              <th colspan="3">Patient: ${
                contact.last_name + ", " + contact.first_name
              } </th>
           </tr>
           <tr>
              <td>ID:  </td>
              <td>DOB: ${
                contact.date_of_birth.month +
                "/" +
                contact.date_of_birth.day +
                "/" +
                contact.date_of_birth.year
              }</td>
              <td>Gender: ${contact.gender}</td>
  
           </tr>
           
           <tr>
              <td colspan="3">
                 Phone: ${contact.phone_number.full}
              </td>
           </tr>
           <tr>
              <td colspan="3">
                 Address: ${contact.address.addr_line1}, ${
    contact.address.city
  }, ${contact.address.state}, ${contact.address.postal}
              </td>
           </tr>
  
        </table>
        </div>
        <div class="column">
        <table style="width: 100%;height: 300px;">
           <tr style="background-color: #bdd8f7;">
              <th colspan="3">Order ID: ${contact.order_id} </th>
           </tr>
           <tr>
              <td style="text-align: center;">
                 Collected:
                 <br />
                 ${
                   contact.collection_date.month +
                   "/" +
                   contact.collection_date.day +
                   "/" +
                   contact.collection_date.year +
                   " " +
                   contact.collection_time.timeInput +
                   " " +
                   contact.collection_time.ampm
                 }
              </td>
              
              <td style="text-align: center;" colspan="2">
                 Reported:
                 <br />
                 ${contact.reported_date}
              </td>
  
           </tr>
           
           <tr>
              <td colspan="3">Specimen Type: NASAL SWAB </td>
           </tr>
           <tr>
              <td colspan="3">Physicians: </td>
           </tr>
        </table>
        </div>
     </div>
     <table style="width: 100%; margin-top: 30px;">
        <tr style="background-color: #bdd8f7;">
           <th>Test </th>
           <th>Result</th>
           <th>Flag</th>
           <th>Unit</th>
           <th>Ref Range </th>
        </tr>
        <tr>
           <td>COVID- 19 SARS -COV- 2, RAPID ANTIGEN </td>
           <td>${contact.test_result.toUpperCase()} </td>
           <td>NORMAL</td>
           <td></td>
           <td>${contact.test_result.toUpperCase()} </td>
        </tr>
     </table>
     <p style="max-width: 500px; text-align: left; font-size: 13px;">
     This test is performed using COVID-19 Antigen Test kit by Access Bio for
     the Detection of COVID-19 (SARS-CoV-2) RNA. The test has been
     received Emergency Use Authorization (EUA) by US Food and Drug
     Administration. The test performance characteristics were determined by
     the M K LABS INC, Hoffman Estates, Illinois. The laboratory is certified under CLIA Wavier
     to perform testing on human clinical specimens.
     </p>
  
     <footer style="position: absolute; bottom: 0;">
        <p>
           <strong>CLIA ID# 14D22 38829</strong>
        </p>
        <code>
        This test was validated, and its performance determined by M K LABS INC. It has not been cleared or approved by FDA. Since FDA clearance is not
        required for clinical use of this laboratory developed test, this laboratory has established and validated the test’s accuracy and
        precision, pursuant to the requirements of CLIA’88. Presumptive tests are indicated as (EUA). All other tests are confirmatory LCMS
        tests.
        </code>
        <div style="margin-top: 50px;" class="row">
         <strong class="column" style="width: 33%;">Lab Tech: SUPERVISOR </strong>
         <code class="column" style="width: 33%; text-align: center;">Report Date: ${
           contact.reported_date
         }</code>
         <strong class="column" style="width: 33%; text-align: right;">Lab Director: Samira Syed</strong>
      </div>
     </footer>
  </body>
  
  </html>`;
  return html;
}

module.exports = createPdfs;
