import {View, Text, Pressable, StyleSheet} from'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import Ionicons from '@expo/vector-icons/Ionicons';

type WebDatePickerProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSearch?: () => void,
    photoCount: number | undefined,
}

export function WebDatePicker({onChange, handleSearch, photoCount}: WebDatePickerProps) {    
    return (
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', 
        padding: 4, gap: 16, borderWidth:.5, borderRadius:8, borderColor:'lightgray'}}>        
            <input 
                type="date" 
                defaultValue="2025-07-01"
                onChange={onChange}
                font-size={16}
                                                      
            />
            <Pressable onPress={handleSearch} >
                <Text style={{backgroundColor:'#206080', padding: 4, textAlignVertical: 'center', borderRadius: 4, fontSize: 14, color: 'white'}}>Show Mars</Text>
            </Pressable>       
            <Text>#{photoCount ? photoCount : 'No photos'}</Text> 
        </View>
    )
}

type NativeDatePickerProps = {
    isoStringDate: string,
    photoCount: number |undefined,   
    onChange: (e: DateTimePickerEvent , seclectedDate?: Date) => void,
    handleSearch?: () => void,
    showCalendar: () => void,  
    isShowingCalendar: boolean,   
}

export function NativeDatePicker({ isoStringDate, photoCount, showCalendar, onChange, handleSearch, isShowingCalendar }: NativeDatePickerProps) {
    return (
        <View style={styles.container}>           
            <View style={styles.calendar}>
                <Text style={{}} >{isoStringDate}</Text>
                <Ionicons name='calendar' size={24} color='teal' onPress={showCalendar} />
            </View>               
            { isShowingCalendar && (
                <DateTimePicker 
                    value={new Date("2025-07-01")}
                    mode='date'
                    display='calendar'
                    onChange={onChange}
                />)
            }
            <Pressable onPress={handleSearch} >
                <Text style={styles.text}>Show Mars</Text>
            </Pressable>  
            <Text >#{photoCount ? photoCount : "No photo" }</Text>              
        </View>
    )   
}

const styles = StyleSheet.create( {
    container: {
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center', 
        paddingHorizontal: 8, paddingVertical: 4,
        gap: 16,
        backgroundColor: '#4ad',
        borderRadius: 8
    },
    calendar: {
        flexDirection: 'row',
        borderRadius: 4,
        borderColor: '#aaa',
        borderWidth: 1,
        padding: 4,
        gap: 16
    },
    text: {
        backgroundColor:'#068', 
        padding: 4, 
        textAlignVertical: 'center', 
        borderRadius: 4, fontSize: 14, 
        color: '#dfdfdf'
    }
})