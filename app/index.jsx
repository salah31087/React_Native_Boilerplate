import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function index() {
    return (
        <View className="flex-1 bg-black items-center justify-center">
            <Text className="text-white font-bold text-2xl" >React Native Boilerplate</Text>
            <Link href="/profil" className='text-zinc-400' >Go to profil page</Link>
        </View>
    )
}



