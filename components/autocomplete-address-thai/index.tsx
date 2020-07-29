import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactAutocomplete from 'react-autocomplete'
import ThaiAddress from 'react-thai-address'
interface ThaiAddress {
    tumbon: string,
    city: string,
    province: string,
    zipcode: string
}
class ThailandAddress extends Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            items: [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handelSelect = this.handelSelect.bind(this)
    }

    static defaultProps: any;
    static propTypes: any;


    handleChange(e: React.FormEvent<HTMLInputElement>) {
        const field = this.props.address
        e.currentTarget.name = field
        if (this.props.onChange) this.props.onChange(e)
        let { delimiter } = this.props
        delimiter = delimiter.length > 0 ? delimiter : ', '
        let searchKey = field
        switch (searchKey) {
            case 'subdistrict': searchKey = 'tumbon'; break
            case 'district': searchKey = 'city'; break
            default:
        }
        const search = ThaiAddress.search({ [searchKey]: e.currentTarget.value }, 10)
        let _search = this.props.filter ? this.props.filter(search) : search
        _search = _search ? _search : search
        this.setState({
            items: _search.map((item: ThaiAddress, key: number) => {
                return {
                    key,
                    label: `${item.tumbon}${delimiter}${item.city}${delimiter}${item.province}${delimiter}${item.zipcode}`
                }
            })
        })
    }

    handelSelect(value: string) {
        const { delimiter } = this.props
        const address = value.split(delimiter.length > 0 ? delimiter : ', ')
        if (this.props.onSelect)
            this.props.onSelect({
                subdistrict: address[0],
                district: address[1],
                province: address[2],
                zipcode: address[3]
            })
    }

    render() {
        return (
            <div>
                <ReactAutocomplete
                    wrapperStyle={{display: 'inline-block', width: '100%'}}
                    items={this.state.items}
                    getItemValue={item => item.label}
                    renderItem={(item, highlighted) =>
                        <div
                            key={item.key}
                            style={Object.assign({
                                backgroundColor: highlighted ? this.props.highlight : this.props.unhighlight,
                                textAlign: 'left',
                                border: 'solid #B2BBC3 1px',
                                height: '50px',
                                padding: '0 10px 0 10px',
                                whiteSpace: 'nowrap',
                                lineHeight: '50px',
                            },
                                this.state.items.indexOf(item) !== 0 ? { borderTop: '0' } : {},
                                this.props.renderStyle)}
                        >
                            {item.label}
                        </div>
                    }
                    renderMenu={(items, _value, style) => {
                    
                        return <div style={{
                            ...style,
                       
                            zIndex: 999,
                            position: 'absolute',
                            top: 'auto',
                            left: 'auto'
                        }}>
                            {items}
                        </div>
                    }}
                    inputProps={{
                        placeholder: this.props.placeholder,
                    }}
                    value={this.props.value}
                    onChange={(e) => this.handleChange(e)}
                    onSelect={(value) => this.handelSelect(value)}
                    renderInput={this.props.renderInput}
    
                />
            </div>
        )
    }
}

ThailandAddress.defaultProps = {
    name: "",
    delimiter: ", ",
    placeholder: '',
    highlight: '#eee',
    unhighlight: 'white',
    style: {},
    renderStyle: {},
    value: '',
    address: 'subdistrict',
    onChange: () => { },
    onSelect: () => { },
    renderInput:(props:any) =>{ 
        return <input {...props}/>
    },
}

ThailandAddress.propTypes = {
    name: PropTypes.string,
    address: PropTypes.string,
    onSelect: PropTypes.func,
    onChange: PropTypes.func,
    renderInput: PropTypes.func,
    value: PropTypes.string,
    delimiter: PropTypes.string,
    placeholder: PropTypes.string,
    highlight: PropTypes.string,
    unhighlight: PropTypes.string,
    style: PropTypes.shape({}),
    renderStyle: PropTypes.shape({}),
}

export default ThailandAddress