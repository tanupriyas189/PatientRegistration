# Patient Registration

This is a Rest API appliction created using Node.js, Express.js and MongoDB.

APIs are tested using Postman.

## Frameworks and Libraries used

Node.js\
Express\
mongoose\
dotenv

## 🔗 Links

[![Postman](https://img.shields.io/badge/postman-000?style=for-the-badge&logo=postman&logoColor=orange)](https://documenter.getpostman.com/view/23863652/2s8YzQWjLc)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tanupriya-saxena-7934991bb/)


## API Endpoints

### Patient

- localhost:8000/patient/create -> Create patient

- localhost:8000/patient/readAll -> Read All Patients

- localhost:8000/patient/readOne/63911ae139e3757934cd806a -> Read One Patient by its ID

- localhost:8000/patient/update/63911ae139e3757934cd806a -> Update Patient by its ID

### Hospital

- localhost:8000/hospital/create -> Create Hospital

- localhost:8000/hospital/readAll -> Read All Hospitals

- localhost:8000/hospital/getAllPsychiatristsByHospitalId/6390ff8bf209deb51dc84b93 -> Get All Phychiatrist info of a Hospital by its ID

- localhost:8000/hospital/update/6390ff8bf209deb51dc84b93 -> Update Hospital by its ID

### Pcychiatrist

- localhost:8000/psychiatrist/create -> Create Psychiatrist

- localhost:8000/psychiatrist/readAll -. Read All Psychiatrist

- localhost:8000/psychiatrist/readOne/6390fa04583918427c363412 -> Read One Psychiatrist by its ID

- localhost:8000/psychiatrist/update/6390fa04583918427c363412 -> Update Psychiatrist by its ID
