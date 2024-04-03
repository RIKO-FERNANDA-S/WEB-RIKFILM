import Tangled from "../images/bg/wallpaperbetter.jpg"

const Motivation = () => {
  return(
    <div className="w-100 justify-content-center ">
        <div className=" d-flex w-100 justify-content-center containerMotivation mx-auto">
            <div className="textMotivation">
                <h1>Jangan percaya pada siapapun yang mengatakan bahwa kamu tidak bisa melakukannya, Tunjukan pada mereka jika kamu bisa.</h1>
                <p>-Tangled</p>
            </div>
            <div className="imgMotivation d-flex justify-content-center  ">
              <img src={Tangled} className="w-50 h-auto " />
            </div>
        </div>
    </div>
  )
   
};
export default Motivation;