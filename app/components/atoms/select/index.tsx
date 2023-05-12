import { StyledSelect } from "./style";
const customStyles = {
    option: () => ({
      borderBottom: '1px dotted pink',
      color:  'black',
      padding: 10,
    }),
    control:() =>({
            
        border: 'none',
        padding: '0px',
        margin: '0px',
        display: 'flex',
    }),
    indicatorSeparator:()=>{
        return{
            display: 'none'
        }
    },


    singleValue: () => ({
        fontFamily: 'Avenir Next',
        fontStyle:  'normal',
        fontWeight: '700',
        fontSize: '14px',
        lineHeight: '12px',
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF',
        marginTop: '-30px',
    }),

    
  }
const Select =() => {
    const options = [
        { value: "brasil", label: "🇧🇷 PT-BR " },
      ];

      return (
        <div >
          <StyledSelect
            styles={customStyles}
            options={options}
            value={{ value: "brasil", label: "🇧🇷 PT-BR " }}
            onChange={(v:any) => console.log(v)}
          />
        </div>
    )
}
export default Select