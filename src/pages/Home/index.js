import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { BannerSlider, HeaderComponent, Jarak, ListKategori, ListProduk, Tombol } from '../../components'
import { colors, fonts } from '../../utils'
import {connect} from 'react-redux'
import { getListKategori } from '../../actions/LigaAction'
import { limitProoduk } from '../../actions/JerseyAction'

class Home extends Component {
    
    componentDidMount(){
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            this.props.dispatch(getListKategori())
            this.props.dispatch(limitProoduk())
        })
    }

    componentWillUnmount(){
        this._unsubscribe()
    }

    render() {
        const { navigation } = this.props
        return (
            <View style={styles.page}>
                <ScrollView showsHorizontalScrollIndicator={false}>
                <HeaderComponent navigation={navigation} page="Home"/>
                <BannerSlider/>
                <View style={styles.pilihKategori}>
                <Text style={styles.label}>Pilih Kategori</Text>
                <ListKategori navigation={navigation}/>
                </View>

                <View style={styles.pilihProduk}>
                <Text style={styles.label}>Pilih <Text 
                style={styles.boldLabel}>Produk</Text> Yang Anda Inginkan</Text>
                <ListProduk  navigation={navigation}/>

                <Tombol title="Lihat Semua" type="text" padding={7}/>
                </View>

                <Jarak height={100}/>
                </ScrollView>
                

            </View>
        )
    }
}

export default connect()(Home)

const styles = StyleSheet.create({
    page: { 
        flex: 1,
        backgroundColor: colors.white, 
},
pilihKategori: {
    marginHorizontal: 30,
    marginTop: 10,
},
pilihProduk: {
    marginHorizontal: 30,
    marginTop: 10,
},
label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular
},
boldLabel: {
    fontSize: 18,
    fontFamily: fonts.primary.bold
}
})
