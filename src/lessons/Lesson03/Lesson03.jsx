import './styles.css';
import Card from '../../companents/Card/card';
import Button from '../../companents/Button/Button';


function Lesson03 (){
    const Homer = {
        firstName: "Homer",
        lastName: "Simpson",
        job: "low-level safety inspector",
        hobby: "watching TV",
        avatar: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
    
    }
    const Marge = {
        firstName: "Marge",
        lastName: "Simpson",
        job: "No job",
        hobby: "cooking",
        avatar:
          "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",
      };

      const Bart = {
        firstName: "Bart",
        lastName: "Simpson",
        job: "No job",
        hobby: "Skating",
        avatar:
          "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
      };
    
    

    return (<div className="lesson03-wrapper"><Card userData={Homer} />
           <Card userData={Marge} />
           <Card userData={Bart} />
           <Button buttonName={"Get user data"}/>
           <Button buttonName={"Delete user data"}/>
           <Button buttonName={"Update user data"}/>
           </div>
    );
}

export default Lesson03;