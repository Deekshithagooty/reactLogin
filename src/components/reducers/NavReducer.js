const initstate="Mycourses"
export default function NavReducer(state=initstate,action){
     switch(action.type)
     {
        case "Login":
            return "Login";
        case "Registration":
            return "Registration";
        case "Mycourses":
            return "Mycourses";
        case "Home":
            return "Home";
        case "List":
            return "List";
        case "Quiz":
            return "Quiz";
        case "Updates":
            return "Updates";
        case "Addcourse":
            return "Addcourse";
        case "Admin":
            return "Admin";
        default:
            return "List";
     }
}