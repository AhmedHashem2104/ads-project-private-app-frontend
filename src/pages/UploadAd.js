import React , { useContext, useEffect, useRef, useState } from 'react'
import { ContextProvider } from '../context/Context'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import APIS from '../api/axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));
  
  function getSteps() {
    return ['', '', ''];
  }
  
  function getStepContent(step , data) {
    switch (step) {
      case 0:
        return (
            <div className="container">
              <h3>Name</h3>
              <br />
              <input type="text" style={{ borderColor : 'white' , marginBottom : 10 }} className="input" value={data.name} onChange={(e) => data.setName(e.target.value)}  />
              <h3>Description</h3>
              <br />
              <textarea style={{ borderColor : 'white' , marginBottom : 10 }} className="input" value={data.description} onChange={(e) => data.setDescription(e.target.value)}  ></textarea>
            </div>
        );
      case 1:
        return (
          <div className="container">
              <h3>Image</h3>
              <br />
              <input type="file" style={{ borderColor : 'white' , marginBottom : 10 }} ref={data.imageRef} className="input" onChange={(e) => data.setImage(e.target.files[0])}  />
              <h3>Video {'->'} Optional</h3>
              <br />
              <input type="file" style={{ borderColor : 'white' , marginBottom : 10 }} ref={data.videoRef} className="input" onChange={(e) => data.setVideo(e.target.files[0])}  />
              <h3>Youtube Link {'->'} Optional</h3>
              <br />
              <input type="text" style={{ borderColor : 'white' , marginBottom : 10 }} className="input" value={data.youtube} onChange={(e) => data.setYoutube(e.target.value)}  />
            </div>
        )
      case 2:
        return <div className="container">
        <h3>Category</h3>
        <br />
        <select style={{ borderColor : 'white' , marginBottom : 10 }} className="input" value={data.categoryId} onChange={(e) => data.setCategoryId(e.target.value)}>
        <option value={0}>Choose Category</option>
          {
            data.categories.map((value , key) => (
              <option key={key} value={value.id}>{value.name}</option>
            ))
          }
        </select>
        <h3>Country</h3>
        <br />
        <select style={{ borderColor : 'white' , marginBottom : 10 }} className="input" value={data.countryId} onChange={(e) => data.setCountryId(e.target.value)}>
        <option value={0}>Choose Country</option>
        {
            data.countries.map((value , key) => (
              <option key={key} value={value.id}>{value.name}</option>
            ))
          }
        </select>
        {data.success ? <div style={{ marginTop : 70 }} className="alert alert-success">{data.success}</div> : <></>}
        {data.error ? <div style={{ marginTop : 70 }} className="alert alert-danger">{data.error}</div> : <></>}
      </div>
      default:
        return 'Unknown step';
    }
  }

const UploadAd = () => {

  const { authenticated } = useContext(ContextProvider)
  const [name , setName] = useState('')
  const [description , setDescription] = useState('')
  const [image , setImage] = useState('')
  const [video , setVideo] = useState('')
  const [youtube , setYoutube] = useState('')
  const imageRef = useRef(null)
  const videoRef = useRef(null)
  const [countryId , setCountryId] = useState('')
  const [categoryId , setCategoryId] = useState('')
  const [countries , setCountries] = useState([])
  const [categories , setCategories] = useState([])
  const [error , setError] = useState('')
  const [success , setSuccess] = useState('')
  const [disable , setDisable] = useState(false)

  useEffect(() => {
    const loadAPI = () => {
      APIS.countriesAPI().then(res => setCountries(res.data)).catch(err => {})
      APIS.categoriesAPI().then(res => setCategories(res.data)).catch(err => {})
    }
    loadAPI()
 }, [])

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = (activeStep , steps) => {
    if(activeStep === steps){
      const data = new FormData()
      data.append('name' , name)
      data.append('description' , description)
      data.append('image' , image)
      video !== '' ? data.append('video' , video) : <></>
      data.append('youtube' , youtube)
      data.append('country_id' , countryId)
      data.append('category_id' , categoryId)
      setDisable(true)

    APIS.storeAd(data).then((res) => {
      setError('')
      setSuccess('Added successfully.')
      setTimeout(function () { window.location.reload(true); }, 5000);
    })
    .catch(err => {
      setDisable(false)
      setError(err.response.data.errors[0].message)
    })

    }
    else{
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    authenticated ?
    <section className="gen-section-padding-2">
      <br />
      <div style={{ display : 'flex' , justifyContent : 'center' }}>
      <h3 style={{ textAlign : 'center' , borderBottom : '1px solid white' , width : 250 }}>Add Your Ad</h3>
      </div>
        <div className="container" style={{ marginTop : 20 }}>
      <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((value , key) => (
          <Step key={key}>
            <StepLabel>{value}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep , {
              name,
              description,
              setName,
              setDescription,
              image,
              setImage,
              video,
              setVideo,
              youtube,
              setYoutube,
              imageRef,
              videoRef,
              countryId,
              setCountryId,
              categoryId,
              setCategoryId,
              countries,
              categories,
              error,
              success
            })}</Typography>
            <div className="container" style={{ width : '100%', display : 'flex' , justifyContent : 'center' }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
                variant="contained" color="primary"
              >
                Back
              </Button>
              <Button variant="contained" disabled={disable} color="primary" onClick={(e) => handleNext(activeStep , steps.length - 1)}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
    </section>
    :
    window.location.href = "/login"
  )
}

export default UploadAd
