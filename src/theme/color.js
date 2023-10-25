const statusColor = (text) => {
  switch (text) {
    case 'completed':
    case 'sent':
    case 'accept':
    case 'product':
      return '#493E3C'
    case 'money':
      return '#4CAF50'
    case 'pending':
    case 'send':
    case 'process':
    case 'retur':
      return '#FEBF35'
    case 'expired':
    case 'cancel':
      return '#E4202D'
    default:
      return '#757575'
  }
}

export default {
  colorCustom: '#333333',
  primaryColor: '#333333',
  darkMainColor: '#8fa9c9',
  darkPrimeMainColor: '#7287a0',
  primaryColorTransparent: 'rgba(54, 95, 198, 0.9)',
  successColorTransparent: 'rgba(26, 179, 133, 0.8)',
  darkPrimaryColor: '#333333',
  darkNavyColor: '#101b39',
  lightPrimaryColor: '#836E6A',
  bgColor: '#f2f2f2',
  textIcons: '#FFFFFF',
  accentIcons: '#F0E9E9',
  primaryText: '#000000',
  primaryTextTransparent: 'rgba(20, 20, 20, 0.6)',
  textIconsTransparent: 'rgba(255, 255, 255, 0.9)',
  secondaryText: '#757575',
  dividerColor: '#D3D1D1',
  termColor: '#EEEEEE',
  primaryBackgroundColor: '#f8f8f8',
  errorColor: '#E4202D',
  cottonColor: '#f1abb9',
  itemUnderline: '#c9c9c9',
  limeColor: '#50a329',
  greenBoardColor: '#3F704D',
  successColor: '#1AB385',
  infoColor: '#29d1ea',
  highlightColor: '#e2a03f',
  whiteCream: '#FCFCFC',
  starColor: '#FEBF35',
  goldColor: '#ffd700',
  noteColor: '#FFFF88',
  cloudColor: '#e9f1f4',
  creamColor: '#FFEDCF',
  sweetColor: '#E1F2EA',
  berryColor: '#E7EBFF',
  smoothText: '#4C4E6A',
  priceText: '#FF6A6A',
  woodColor: '#c8966c',
  navyColor: '#000080',
  transparent: 'transparent',
  link: '#1A0DAB',
  statusColor
}
