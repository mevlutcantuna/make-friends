const initialState = {
  name: "",
  surname: "",
  age: "",
  job: "",
  mail: "",
  about: "",
  list: [
    {
      name:'fatma',
      surname:'tuna',
      age:'46',
      job:'mom',
      mail:'fatmatuna@gmail.com',
      about:' Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      id:Math.random()
    }
    ,{
      name:'mevlüt can',
      surname:'tuna',
      age:'22',
      job:'developer',
      mail:'mttuna90@gmail.com',
      about:' Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      id:Math.random()
    },
    {
      name:'salih',
      surname:'tuna',
      age:'53',
      job:'father',
      mail:'salihtuna@gmail.com',
      about:' Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      id:Math.random()
    },
    {
      name:'furkan',
      surname:'tuna',
      age:'20',
      job:'student',
      mail:'furkantuna90@gmail.com',
      about:' Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      id:Math.random()
    }

  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGENAME":
      return {...state,name:action.payload};
    case "CHANGESURNAME":
      return {...state,surname:action.payload};
    case "CHANGEAGE":
      return {...state,age:action.payload};
    case "CHANGEJOB":
      return {...state,job:action.payload};
    case "CHANGEMAIL":
      return {...state,mail:action.payload};
    case "CHANGEABOUT":
      return {...state,about:action.payload};
    case "ADDBUTTON":
      const newListItem = {
        name : state.name,
        surname: state.surname,
        age: state.age,
        job: state.job,
        mail: state.mail,
        about: state.about,
        id: Math.random(),
      }
      if(state.name && state.surname && state.age && state.mail && state.about && state.job !== ''){
        return {
          name: '',
          surname:'',
          age:'',
          job:'',
          mail:'',
          about:'',
          list: [...state.list,newListItem]};
      }else {
         alert('please enter all your information ');
      }
      return state;

    case 'REMOVEBUTTON':
      console.log(action.payload);
      const newList = state.list.filter((item) => item.id !== action.payload);
      return {...state,list:newList};
    default:
      return state;
  }
};

export default reducer;
