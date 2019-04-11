const MUTATIONS = [];undefined
MUTATIONS[1] = `mutation mutation1 { createFileMeta(data: {oldId:"2111",metaType:"",metaName:"attachedFile",metaValue:"2014/12/regina.jpg",metaDeleted:false,file:{connect:{oldId:"351"}}}) { id } } `
    
MUTATIONS[2] = `mutation mutation2 { createFileMeta(data: {oldId:"2121",metaType:"",metaName:"s3Info",metaValue:"/uploads/2014/12/regina.jpg",metaDeleted:false,file:{connect:{oldId:"351"}}}) { id } } `
    
MUTATIONS[3] = `mutation mutation3 { createFileMeta(data: {oldId:"2131",metaType:"",metaName:"fileMetadata",metaValue:"a%3A4%3A%7Bs%3A5%3A%5C%22width%5C%22%3Bi%3A495%3Bs%3A6%3A%5C%22height%5C%22%3Bi%3A495%3Bs%3A4%3A%5C%22file%5C%22%3Bs%3A18%3A%5C%222014/12/regina.jpg%5C%22%3Bs%3A10%3A%5C%22image_meta%5C%22%3Ba%3A11%3A%7Bs%3A8%3A%5C%22aperture%5C%22%3Bi%3A0%3Bs%3A6%3A%5C%22credit%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A6%3A%5C%22camera%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A7%3A%5C%22caption%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A17%3A%5C%22created_timestamp%5C%22%3Bi%3A0%3Bs%3A9%3A%5C%22copyright%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A12%3A%5C%22focal_length%5C%22%3Bi%3A0%3Bs%3A3%3A%5C%22iso%5C%22%3Bi%3A0%3Bs%3A13%3A%5C%22shutter_speed%5C%22%3Bi%3A0%3Bs%3A5%3A%5C%22title%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A11%3A%5C%22orientation%5C%22%3Bi%3A0%3B%7D%7D",metaDeleted:false,file:{connect:{oldId:"351"}}}) { id } } `
    
MUTATIONS[4] = `mutation mutation4 { createFileMeta(data: {oldId:"2171",metaType:"",metaName:"attachedFile",metaValue:"2014/12/06-Cant-Tell-Me-Nothing.mp3",metaDeleted:false,file:{connect:{oldId:"371"}}}) { id } } `
    
MUTATIONS[5] = `mutation mutation5 { createFileMeta(data: {oldId:"2181",metaType:"",metaName:"attachedFile",metaValue:"2015/03/06-Cant-Tell-Me-Nothing-mp3-image.jpg",metaDeleted:false,file:{connect:{oldId:"381"}}}) { id } } `
    
MUTATIONS[6] = `mutation mutation6 { createFileMeta(data: {oldId:"2201",metaType:"",metaName:"s3Info",metaValue:"/uploads/2015/03/06-Cant-Tell-Me-Nothing-mp3-image.jpg",metaDeleted:false,file:{connect:{oldId:"381"}}}) { id } } `
    
MUTATIONS[7] = `mutation mutation7 { createFileMeta(data: {oldId:"2211",metaType:"",metaName:"fileMetadata",metaValue:"a%3A4%3A%7Bs%3A5%3A%5C%22width%5C%22%3Bi%3A300%3Bs%3A6%3A%5C%22height%5C%22%3Bi%3A300%3Bs%3A4%3A%5C%22file%5C%22%3Bs%3A45%3A%5C%222015/03/06-Cant-Tell-Me-Nothing-mp3-image.jpg%5C%22%3Bs%3A10%3A%5C%22image_meta%5C%22%3Ba%3A11%3A%7Bs%3A8%3A%5C%22aperture%5C%22%3Bi%3A0%3Bs%3A6%3A%5C%22credit%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A6%3A%5C%22camera%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A7%3A%5C%22caption%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A17%3A%5C%22created_timestamp%5C%22%3Bi%3A0%3Bs%3A9%3A%5C%22copyright%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A12%3A%5C%22focal_length%5C%22%3Bi%3A0%3Bs%3A3%3A%5C%22iso%5C%22%3Bi%3A0%3Bs%3A13%3A%5C%22shutter_speed%5C%22%3Bi%3A0%3Bs%3A5%3A%5C%22title%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A11%3A%5C%22orientation%5C%22%3Bi%3A0%3B%7D%7D",metaDeleted:false,file:{connect:{oldId:"381"}}}) { id } } `
    
MUTATIONS[8] = `mutation mutation8 { createFileMeta(data: {oldId:"2221",metaType:"",metaName:"thumbnailId",metaValue:"381",metaDeleted:false,file:{connect:{oldId:"371"}}}) { id } } `
    
MUTATIONS[9] = `mutation mutation9 { createFileMeta(data: {oldId:"2231",metaType:"",metaName:"s3Info",metaValue:"/uploads/2015/03/06-Cant-Tell-Me-Nothing.mp3",metaDeleted:false,file:{connect:{oldId:"371"}}}) { id } } `
    
MUTATIONS[10] = `mutation mutation10 { createFileMeta(data: {oldId:"2241",metaType:"",metaName:"fileMetadata",metaValue:"a%3A23%3A%7Bs%3A10%3A%5C%22dataformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22channels%5C%22%3Bi%3A2%3Bs%3A11%3A%5C%22sample_rate%5C%22%3Bi%3A44100%3Bs%3A7%3A%5C%22bitrate%5C%22%3Bi%3A320000%3Bs%3A11%3A%5C%22channelmode%5C%22%3Bs%3A6%3A%5C%22stereo%5C%22%3Bs%3A12%3A%5C%22bitrate_mode%5C%22%3Bs%3A3%3A%5C%22cbr%5C%22%3Bs%3A8%3A%5C%22lossless%5C%22%3Bb%3A0%3Bs%3A15%3A%5C%22encoder_options%5C%22%3Bs%3A6%3A%5C%22CBR320%5C%22%3Bs%3A17%3A%5C%22compression_ratio%5C%22%3Bd%3A0.22675736961451248%3Bs%3A10%3A%5C%22fileformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22filesize%5C%22%3Bi%3A10950205%3Bs%3A9%3A%5C%22mime_type%5C%22%3Bs%3A10%3A%5C%22audio/mpeg%5C%22%3Bs%3A6%3A%5C%22length%5C%22%3Bi%3A272%3Bs%3A16%3A%5C%22length_formatted%5C%22%3Bs%3A4%3A%5C%224%3A32%5C%22%3Bs%3A4%3A%5C%22band%5C%22%3Bs%3A10%3A%5C%22Kanye%20West%5C%22%3Bs%3A6%3A%5C%22artist%5C%22%3Bs%3A10%3A%5C%22Kanye%20West%5C%22%3Bs%3A5%3A%5C%22title%5C%22%3Bs%3A21%3A%5C%22Can%27t%20Tell%20Me%20Nothing%5C%22%3Bs%3A5%3A%5C%22album%5C%22%3Bs%3A10%3A%5C%22Graduation%5C%22%3Bs%3A4%3A%5C%22year%5C%22%3Bs%3A4%3A%5C%222007%5C%22%3Bs%3A12%3A%5C%22track_number%5C%22%3Bs%3A2%3A%5C%2206%5C%22%3Bs%3A5%3A%5C%22genre%5C%22%3Bs%3A7%3A%5C%22Hip-Hop%5C%22%3Bs%3A16%3A%5C%22encoder_settings%5C%22%3Bs%3A10%3A%5C%22FLAC%201.2.1%5C%22%3Bs%3A5%3A%5C%22image%5C%22%3Ba%3A3%3A%7Bs%3A4%3A%5C%22mime%5C%22%3Bs%3A10%3A%5C%22image/jpeg%5C%22%3Bs%3A5%3A%5C%22width%5C%22%3Bi%3A300%3Bs%3A6%3A%5C%22height%5C%22%3Bi%3A300%3B%7D%7D",metaDeleted:false,file:{connect:{oldId:"371"}}}) { id } } `
    
MUTATIONS[11] = `mutation mutation11 { createFileMeta(data: {oldId:"2321",metaType:"",metaName:"attachedFile",metaValue:"2014/12/06-Cant-Tell-Me-Nothing1.mp3",metaDeleted:false,file:{connect:{oldId:"401"}}}) { id } } `
    
MUTATIONS[12] = `mutation mutation12 { createFileMeta(data: {oldId:"2331",metaType:"",metaName:"thumbnailId",metaValue:"381",metaDeleted:false,file:{connect:{oldId:"401"}}}) { id } } `
    
MUTATIONS[13] = `mutation mutation13 { createFileMeta(data: {oldId:"2341",metaType:"",metaName:"s3Info",metaValue:"/uploads/2015/03/06-Cant-Tell-Me-Nothing1.mp3",metaDeleted:false,file:{connect:{oldId:"401"}}}) { id } } `
    
MUTATIONS[14] = `mutation mutation14 { createFileMeta(data: {oldId:"2351",metaType:"",metaName:"fileMetadata",metaValue:"a%3A23%3A%7Bs%3A10%3A%5C%22dataformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22channels%5C%22%3Bi%3A2%3Bs%3A11%3A%5C%22sample_rate%5C%22%3Bi%3A44100%3Bs%3A7%3A%5C%22bitrate%5C%22%3Bi%3A320000%3Bs%3A11%3A%5C%22channelmode%5C%22%3Bs%3A6%3A%5C%22stereo%5C%22%3Bs%3A12%3A%5C%22bitrate_mode%5C%22%3Bs%3A3%3A%5C%22cbr%5C%22%3Bs%3A8%3A%5C%22lossless%5C%22%3Bb%3A0%3Bs%3A15%3A%5C%22encoder_options%5C%22%3Bs%3A6%3A%5C%22CBR320%5C%22%3Bs%3A17%3A%5C%22compression_ratio%5C%22%3Bd%3A0.22675736961451248%3Bs%3A10%3A%5C%22fileformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22filesize%5C%22%3Bi%3A10950205%3Bs%3A9%3A%5C%22mime_type%5C%22%3Bs%3A10%3A%5C%22audio/mpeg%5C%22%3Bs%3A6%3A%5C%22length%5C%22%3Bi%3A272%3Bs%3A16%3A%5C%22length_formatted%5C%22%3Bs%3A4%3A%5C%224%3A32%5C%22%3Bs%3A4%3A%5C%22band%5C%22%3Bs%3A10%3A%5C%22Kanye%20West%5C%22%3Bs%3A6%3A%5C%22artist%5C%22%3Bs%3A10%3A%5C%22Kanye%20West%5C%22%3Bs%3A5%3A%5C%22title%5C%22%3Bs%3A21%3A%5C%22Can%27t%20Tell%20Me%20Nothing%5C%22%3Bs%3A5%3A%5C%22album%5C%22%3Bs%3A10%3A%5C%22Graduation%5C%22%3Bs%3A4%3A%5C%22year%5C%22%3Bs%3A4%3A%5C%222007%5C%22%3Bs%3A12%3A%5C%22track_number%5C%22%3Bs%3A2%3A%5C%2206%5C%22%3Bs%3A5%3A%5C%22genre%5C%22%3Bs%3A7%3A%5C%22Hip-Hop%5C%22%3Bs%3A16%3A%5C%22encoder_settings%5C%22%3Bs%3A10%3A%5C%22FLAC%201.2.1%5C%22%3Bs%3A5%3A%5C%22image%5C%22%3Ba%3A3%3A%7Bs%3A4%3A%5C%22mime%5C%22%3Bs%3A10%3A%5C%22image/jpeg%5C%22%3Bs%3A5%3A%5C%22width%5C%22%3Bi%3A300%3Bs%3A6%3A%5C%22height%5C%22%3Bi%3A300%3B%7D%7D",metaDeleted:false,file:{connect:{oldId:"401"}}}) { id } } `
    
MUTATIONS[15] = `mutation mutation15 { createFileMeta(data: {oldId:"2361",metaType:"",metaName:"attachedFile",metaValue:"2014/12/graduation.jpg",metaDeleted:false,file:{connect:{oldId:"411"}}}) { id } } `
    
MUTATIONS[16] = `mutation mutation16 { createFileMeta(data: {oldId:"2371",metaType:"",metaName:"s3Info",metaValue:"/uploads/2014/12/graduation.jpg",metaDeleted:false,file:{connect:{oldId:"411"}}}) { id } } `
    
MUTATIONS[17] = `mutation mutation17 { createFileMeta(data: {oldId:"2381",metaType:"",metaName:"fileMetadata",metaValue:"a%3A4%3A%7Bs%3A5%3A%5C%22width%5C%22%3Bi%3A736%3Bs%3A6%3A%5C%22height%5C%22%3Bi%3A736%3Bs%3A4%3A%5C%22file%5C%22%3Bs%3A22%3A%5C%222014/12/graduation.jpg%5C%22%3Bs%3A10%3A%5C%22image_meta%5C%22%3Ba%3A11%3A%7Bs%3A8%3A%5C%22aperture%5C%22%3Bi%3A0%3Bs%3A6%3A%5C%22credit%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A6%3A%5C%22camera%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A7%3A%5C%22caption%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A17%3A%5C%22created_timestamp%5C%22%3Bi%3A0%3Bs%3A9%3A%5C%22copyright%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A12%3A%5C%22focal_length%5C%22%3Bi%3A0%3Bs%3A3%3A%5C%22iso%5C%22%3Bi%3A0%3Bs%3A13%3A%5C%22shutter_speed%5C%22%3Bi%3A0%3Bs%3A5%3A%5C%22title%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A11%3A%5C%22orientation%5C%22%3Bi%3A0%3B%7D%7D",metaDeleted:false,file:{connect:{oldId:"411"}}}) { id } } `
    
MUTATIONS[18] = `mutation mutation18 { createFileMeta(data: {oldId:"2731",metaType:"",metaName:"attachedFile",metaValue:"2014/12/6.jpg",metaDeleted:false,file:{connect:{oldId:"431"}}}) { id } } `
    
MUTATIONS[19] = `mutation mutation19 { createFileMeta(data: {oldId:"2741",metaType:"",metaName:"s3Info",metaValue:"/uploads/2014/12/6.jpg",metaDeleted:false,file:{connect:{oldId:"431"}}}) { id } } `
    
MUTATIONS[20] = `mutation mutation20 { createFileMeta(data: {oldId:"2751",metaType:"",metaName:"fileMetadata",metaValue:"a%3A4%3A%7Bs%3A5%3A%5C%22width%5C%22%3Bi%3A960%3Bs%3A6%3A%5C%22height%5C%22%3Bi%3A1280%3Bs%3A4%3A%5C%22file%5C%22%3Bs%3A13%3A%5C%222014/12/6.jpg%5C%22%3Bs%3A10%3A%5C%22image_meta%5C%22%3Ba%3A11%3A%7Bs%3A8%3A%5C%22aperture%5C%22%3Bi%3A0%3Bs%3A6%3A%5C%22credit%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A6%3A%5C%22camera%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A7%3A%5C%22caption%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A17%3A%5C%22created_timestamp%5C%22%3Bi%3A0%3Bs%3A9%3A%5C%22copyright%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A12%3A%5C%22focal_length%5C%22%3Bi%3A0%3Bs%3A3%3A%5C%22iso%5C%22%3Bi%3A0%3Bs%3A13%3A%5C%22shutter_speed%5C%22%3Bi%3A0%3Bs%3A5%3A%5C%22title%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A11%3A%5C%22orientation%5C%22%3Bi%3A0%3B%7D%7D",metaDeleted:false,file:{connect:{oldId:"431"}}}) { id } } `
    
MUTATIONS[21] = `mutation mutation21 { createFileMeta(data: {oldId:"2761",metaType:"",metaName:"attachedFile",metaValue:"2014/12/184518854.mp3",metaDeleted:false,file:{connect:{oldId:"451"}}}) { id } } `
    
MUTATIONS[22] = `mutation mutation22 { createFileMeta(data: {oldId:"2771",metaType:"",metaName:"s3Info",metaValue:"/uploads/2015/03/184518854.mp3",metaDeleted:false,file:{connect:{oldId:"451"}}}) { id } } `
    
MUTATIONS[23] = `mutation mutation23 { createFileMeta(data: {oldId:"2781",metaType:"",metaName:"fileMetadata",metaValue:"a%3A16%3A%7Bs%3A10%3A%5C%22dataformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22channels%5C%22%3Bi%3A2%3Bs%3A11%3A%5C%22sample_rate%5C%22%3Bi%3A44100%3Bs%3A7%3A%5C%22bitrate%5C%22%3Bi%3A128000%3Bs%3A11%3A%5C%22channelmode%5C%22%3Bs%3A12%3A%5C%22joint%20stereo%5C%22%3Bs%3A12%3A%5C%22bitrate_mode%5C%22%3Bs%3A3%3A%5C%22cbr%5C%22%3Bs%3A5%3A%5C%22codec%5C%22%3Bs%3A4%3A%5C%22LAME%5C%22%3Bs%3A7%3A%5C%22encoder%5C%22%3Bs%3A9%3A%5C%22LAME3.99r%5C%22%3Bs%3A8%3A%5C%22lossless%5C%22%3Bb%3A0%3Bs%3A15%3A%5C%22encoder_options%5C%22%3Bs%3A6%3A%5C%22CBR128%5C%22%3Bs%3A17%3A%5C%22compression_ratio%5C%22%3Bd%3A0.090702947845804988%3Bs%3A10%3A%5C%22fileformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22filesize%5C%22%3Bi%3A7720959%3Bs%3A9%3A%5C%22mime_type%5C%22%3Bs%3A10%3A%5C%22audio/mpeg%5C%22%3Bs%3A6%3A%5C%22length%5C%22%3Bi%3A483%3Bs%3A16%3A%5C%22length_formatted%5C%22%3Bs%3A4%3A%5C%228%3A03%5C%22%3B%7D",metaDeleted:false,file:{connect:{oldId:"451"}}}) { id } } `
    
MUTATIONS[24] = `mutation mutation24 { createFileMeta(data: {oldId:"2931",metaType:"",metaName:"attachedFile",metaValue:"2014/12/06-Cant-Tell-Me-Nothing2.mp3",metaDeleted:false,file:{connect:{oldId:"471"}}}) { id } } `
    
MUTATIONS[25] = `mutation mutation25 { createFileMeta(data: {oldId:"2941",metaType:"",metaName:"thumbnailId",metaValue:"381",metaDeleted:false,file:{connect:{oldId:"471"}}}) { id } } `
    
MUTATIONS[26] = `mutation mutation26 { createFileMeta(data: {oldId:"2951",metaType:"",metaName:"s3Info",metaValue:"/uploads/2015/03/06-Cant-Tell-Me-Nothing2.mp3",metaDeleted:false,file:{connect:{oldId:"471"}}}) { id } } `
    
MUTATIONS[27] = `mutation mutation27 { createFileMeta(data: {oldId:"2961",metaType:"",metaName:"fileMetadata",metaValue:"a%3A23%3A%7Bs%3A10%3A%5C%22dataformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22channels%5C%22%3Bi%3A2%3Bs%3A11%3A%5C%22sample_rate%5C%22%3Bi%3A44100%3Bs%3A7%3A%5C%22bitrate%5C%22%3Bi%3A320000%3Bs%3A11%3A%5C%22channelmode%5C%22%3Bs%3A6%3A%5C%22stereo%5C%22%3Bs%3A12%3A%5C%22bitrate_mode%5C%22%3Bs%3A3%3A%5C%22cbr%5C%22%3Bs%3A8%3A%5C%22lossless%5C%22%3Bb%3A0%3Bs%3A15%3A%5C%22encoder_options%5C%22%3Bs%3A6%3A%5C%22CBR320%5C%22%3Bs%3A17%3A%5C%22compression_ratio%5C%22%3Bd%3A0.22675736961451248%3Bs%3A10%3A%5C%22fileformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22filesize%5C%22%3Bi%3A10950205%3Bs%3A9%3A%5C%22mime_type%5C%22%3Bs%3A10%3A%5C%22audio/mpeg%5C%22%3Bs%3A6%3A%5C%22length%5C%22%3Bi%3A272%3Bs%3A16%3A%5C%22length_formatted%5C%22%3Bs%3A4%3A%5C%224%3A32%5C%22%3Bs%3A4%3A%5C%22band%5C%22%3Bs%3A10%3A%5C%22Kanye%20West%5C%22%3Bs%3A6%3A%5C%22artist%5C%22%3Bs%3A10%3A%5C%22Kanye%20West%5C%22%3Bs%3A5%3A%5C%22title%5C%22%3Bs%3A21%3A%5C%22Can%27t%20Tell%20Me%20Nothing%5C%22%3Bs%3A5%3A%5C%22album%5C%22%3Bs%3A10%3A%5C%22Graduation%5C%22%3Bs%3A4%3A%5C%22year%5C%22%3Bs%3A4%3A%5C%222007%5C%22%3Bs%3A12%3A%5C%22track_number%5C%22%3Bs%3A2%3A%5C%2206%5C%22%3Bs%3A5%3A%5C%22genre%5C%22%3Bs%3A7%3A%5C%22Hip-Hop%5C%22%3Bs%3A16%3A%5C%22encoder_settings%5C%22%3Bs%3A10%3A%5C%22FLAC%201.2.1%5C%22%3Bs%3A5%3A%5C%22image%5C%22%3Ba%3A3%3A%7Bs%3A4%3A%5C%22mime%5C%22%3Bs%3A10%3A%5C%22image/jpeg%5C%22%3Bs%3A5%3A%5C%22width%5C%22%3Bi%3A300%3Bs%3A6%3A%5C%22height%5C%22%3Bi%3A300%3B%7D%7D",metaDeleted:false,file:{connect:{oldId:"471"}}}) { id } } `
    
MUTATIONS[28] = `mutation mutation28 { createFileMeta(data: {oldId:"2971",metaType:"",metaName:"attachedFile",metaValue:"2014/12/graduation.jpg",metaDeleted:false,file:{connect:{oldId:"481"}}}) { id } } `
    
MUTATIONS[29] = `mutation mutation29 { createFileMeta(data: {oldId:"2981",metaType:"",metaName:"s3Info",metaValue:"/uploads/2014/12/graduation.jpg",metaDeleted:false,file:{connect:{oldId:"481"}}}) { id } } `
    
MUTATIONS[30] = `mutation mutation30 { createFileMeta(data: {oldId:"2991",metaType:"",metaName:"fileMetadata",metaValue:"a%3A4%3A%7Bs%3A5%3A%5C%22width%5C%22%3Bi%3A736%3Bs%3A6%3A%5C%22height%5C%22%3Bi%3A736%3Bs%3A4%3A%5C%22file%5C%22%3Bs%3A22%3A%5C%222014/12/graduation.jpg%5C%22%3Bs%3A10%3A%5C%22image_meta%5C%22%3Ba%3A11%3A%7Bs%3A8%3A%5C%22aperture%5C%22%3Bi%3A0%3Bs%3A6%3A%5C%22credit%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A6%3A%5C%22camera%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A7%3A%5C%22caption%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A17%3A%5C%22created_timestamp%5C%22%3Bi%3A0%3Bs%3A9%3A%5C%22copyright%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A12%3A%5C%22focal_length%5C%22%3Bi%3A0%3Bs%3A3%3A%5C%22iso%5C%22%3Bi%3A0%3Bs%3A13%3A%5C%22shutter_speed%5C%22%3Bi%3A0%3Bs%3A5%3A%5C%22title%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A11%3A%5C%22orientation%5C%22%3Bi%3A0%3B%7D%7D",metaDeleted:false,file:{connect:{oldId:"481"}}}) { id } } `
    
MUTATIONS[31] = `mutation mutation31 { createFileMeta(data: {oldId:"3451",metaType:"",metaName:"attachedFile",metaValue:"2014/12/130475890.mp3",metaDeleted:false,file:{connect:{oldId:"531"}}}) { id } } `
    
MUTATIONS[32] = `mutation mutation32 { createFileMeta(data: {oldId:"3461",metaType:"",metaName:"s3Info",metaValue:"/uploads/2015/03/130475890.mp3",metaDeleted:false,file:{connect:{oldId:"531"}}}) { id } } `
    
MUTATIONS[33] = `mutation mutation33 { createFileMeta(data: {oldId:"3471",metaType:"",metaName:"fileMetadata",metaValue:"a%3A16%3A%7Bs%3A10%3A%5C%22dataformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22channels%5C%22%3Bi%3A2%3Bs%3A11%3A%5C%22sample_rate%5C%22%3Bi%3A44100%3Bs%3A7%3A%5C%22bitrate%5C%22%3Bi%3A128000%3Bs%3A11%3A%5C%22channelmode%5C%22%3Bs%3A12%3A%5C%22joint%20stereo%5C%22%3Bs%3A12%3A%5C%22bitrate_mode%5C%22%3Bs%3A3%3A%5C%22cbr%5C%22%3Bs%3A5%3A%5C%22codec%5C%22%3Bs%3A4%3A%5C%22LAME%5C%22%3Bs%3A7%3A%5C%22encoder%5C%22%3Bs%3A9%3A%5C%22LAME3.99r%5C%22%3Bs%3A8%3A%5C%22lossless%5C%22%3Bb%3A0%3Bs%3A15%3A%5C%22encoder_options%5C%22%3Bs%3A6%3A%5C%22CBR128%5C%22%3Bs%3A17%3A%5C%22compression_ratio%5C%22%3Bd%3A0.090702947845804988%3Bs%3A10%3A%5C%22fileformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22filesize%5C%22%3Bi%3A3249213%3Bs%3A9%3A%5C%22mime_type%5C%22%3Bs%3A10%3A%5C%22audio/mpeg%5C%22%3Bs%3A6%3A%5C%22length%5C%22%3Bi%3A203%3Bs%3A16%3A%5C%22length_formatted%5C%22%3Bs%3A4%3A%5C%223%3A23%5C%22%3B%7D",metaDeleted:false,file:{connect:{oldId:"531"}}}) { id } } `
    
MUTATIONS[34] = `mutation mutation34 { createFileMeta(data: {oldId:"3881",metaType:"",metaName:"attachedFile",metaValue:"2014/12/03-Stronger.mp3",metaDeleted:false,file:{connect:{oldId:"571"}}}) { id } } `
    
MUTATIONS[35] = `mutation mutation35 { createFileMeta(data: {oldId:"3891",metaType:"",metaName:"thumbnailId",metaValue:"381",metaDeleted:false,file:{connect:{oldId:"571"}}}) { id } } `
    
MUTATIONS[36] = `mutation mutation36 { createFileMeta(data: {oldId:"3901",metaType:"",metaName:"s3Info",metaValue:"/uploads/2015/03/03-Stronger.mp3",metaDeleted:false,file:{connect:{oldId:"571"}}}) { id } } `
    
MUTATIONS[37] = `mutation mutation37 { createFileMeta(data: {oldId:"3911",metaType:"",metaName:"fileMetadata",metaValue:"a%3A23%3A%7Bs%3A10%3A%5C%22dataformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22channels%5C%22%3Bi%3A2%3Bs%3A11%3A%5C%22sample_rate%5C%22%3Bi%3A44100%3Bs%3A7%3A%5C%22bitrate%5C%22%3Bi%3A320000%3Bs%3A11%3A%5C%22channelmode%5C%22%3Bs%3A6%3A%5C%22stereo%5C%22%3Bs%3A12%3A%5C%22bitrate_mode%5C%22%3Bs%3A3%3A%5C%22cbr%5C%22%3Bs%3A8%3A%5C%22lossless%5C%22%3Bb%3A0%3Bs%3A15%3A%5C%22encoder_options%5C%22%3Bs%3A6%3A%5C%22CBR320%5C%22%3Bs%3A17%3A%5C%22compression_ratio%5C%22%3Bd%3A0.22675736961451248%3Bs%3A10%3A%5C%22fileformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22filesize%5C%22%3Bi%3A12564560%3Bs%3A9%3A%5C%22mime_type%5C%22%3Bs%3A10%3A%5C%22audio/mpeg%5C%22%3Bs%3A6%3A%5C%22length%5C%22%3Bi%3A312%3Bs%3A16%3A%5C%22length_formatted%5C%22%3Bs%3A4%3A%5C%225%3A12%5C%22%3Bs%3A4%3A%5C%22band%5C%22%3Bs%3A10%3A%5C%22Kanye%20West%5C%22%3Bs%3A6%3A%5C%22artist%5C%22%3Bs%3A10%3A%5C%22Kanye%20West%5C%22%3Bs%3A5%3A%5C%22title%5C%22%3Bs%3A8%3A%5C%22Stronger%5C%22%3Bs%3A5%3A%5C%22album%5C%22%3Bs%3A10%3A%5C%22Graduation%5C%22%3Bs%3A4%3A%5C%22year%5C%22%3Bs%3A4%3A%5C%222007%5C%22%3Bs%3A12%3A%5C%22track_number%5C%22%3Bs%3A2%3A%5C%2203%5C%22%3Bs%3A5%3A%5C%22genre%5C%22%3Bs%3A7%3A%5C%22Hip-Hop%5C%22%3Bs%3A16%3A%5C%22encoder_settings%5C%22%3Bs%3A10%3A%5C%22FLAC%201.2.1%5C%22%3Bs%3A5%3A%5C%22image%5C%22%3Ba%3A3%3A%7Bs%3A4%3A%5C%22mime%5C%22%3Bs%3A10%3A%5C%22image/jpeg%5C%22%3Bs%3A5%3A%5C%22width%5C%22%3Bi%3A300%3Bs%3A6%3A%5C%22height%5C%22%3Bi%3A300%3B%7D%7D",metaDeleted:false,file:{connect:{oldId:"571"}}}) { id } } `
    
MUTATIONS[38] = `mutation mutation38 { createFileMeta(data: {oldId:"3921",metaType:"",metaName:"attachedFile",metaValue:"2014/12/regina.jpg",metaDeleted:false,file:{connect:{oldId:"581"}}}) { id } } `
    
MUTATIONS[39] = `mutation mutation39 { createFileMeta(data: {oldId:"3931",metaType:"",metaName:"s3Info",metaValue:"/uploads/2014/12/regina.jpg",metaDeleted:false,file:{connect:{oldId:"581"}}}) { id } } `
    
MUTATIONS[40] = `mutation mutation40 { createFileMeta(data: {oldId:"3941",metaType:"",metaName:"fileMetadata",metaValue:"a%3A4%3A%7Bs%3A5%3A%5C%22width%5C%22%3Bi%3A495%3Bs%3A6%3A%5C%22height%5C%22%3Bi%3A495%3Bs%3A4%3A%5C%22file%5C%22%3Bs%3A18%3A%5C%222014/12/regina.jpg%5C%22%3Bs%3A10%3A%5C%22image_meta%5C%22%3Ba%3A11%3A%7Bs%3A8%3A%5C%22aperture%5C%22%3Bi%3A0%3Bs%3A6%3A%5C%22credit%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A6%3A%5C%22camera%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A7%3A%5C%22caption%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A17%3A%5C%22created_timestamp%5C%22%3Bi%3A0%3Bs%3A9%3A%5C%22copyright%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A12%3A%5C%22focal_length%5C%22%3Bi%3A0%3Bs%3A3%3A%5C%22iso%5C%22%3Bi%3A0%3Bs%3A13%3A%5C%22shutter_speed%5C%22%3Bi%3A0%3Bs%3A5%3A%5C%22title%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A11%3A%5C%22orientation%5C%22%3Bi%3A0%3B%7D%7D",metaDeleted:false,file:{connect:{oldId:"581"}}}) { id } } `
    
MUTATIONS[41] = `mutation mutation41 { createFileMeta(data: {oldId:"4221",metaType:"",metaName:"attachedFile",metaValue:"2014/12/04-I-Wonder.mp3",metaDeleted:false,file:{connect:{oldId:"621"}}}) { id } } `
    
MUTATIONS[42] = `mutation mutation42 { createFileMeta(data: {oldId:"4231",metaType:"",metaName:"thumbnailId",metaValue:"381",metaDeleted:false,file:{connect:{oldId:"621"}}}) { id } } `
    
MUTATIONS[43] = `mutation mutation43 { createFileMeta(data: {oldId:"4241",metaType:"",metaName:"s3Info",metaValue:"/uploads/2015/03/04-I-Wonder.mp3",metaDeleted:false,file:{connect:{oldId:"621"}}}) { id } } `
    
MUTATIONS[44] = `mutation mutation44 { createFileMeta(data: {oldId:"4251",metaType:"",metaName:"fileMetadata",metaValue:"a%3A23%3A%7Bs%3A10%3A%5C%22dataformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22channels%5C%22%3Bi%3A2%3Bs%3A11%3A%5C%22sample_rate%5C%22%3Bi%3A44100%3Bs%3A7%3A%5C%22bitrate%5C%22%3Bi%3A320000%3Bs%3A11%3A%5C%22channelmode%5C%22%3Bs%3A6%3A%5C%22stereo%5C%22%3Bs%3A12%3A%5C%22bitrate_mode%5C%22%3Bs%3A3%3A%5C%22cbr%5C%22%3Bs%3A8%3A%5C%22lossless%5C%22%3Bb%3A0%3Bs%3A15%3A%5C%22encoder_options%5C%22%3Bs%3A6%3A%5C%22CBR320%5C%22%3Bs%3A17%3A%5C%22compression_ratio%5C%22%3Bd%3A0.22675736961451248%3Bs%3A10%3A%5C%22fileformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22filesize%5C%22%3Bi%3A9823792%3Bs%3A9%3A%5C%22mime_type%5C%22%3Bs%3A10%3A%5C%22audio/mpeg%5C%22%3Bs%3A6%3A%5C%22length%5C%22%3Bi%3A243%3Bs%3A16%3A%5C%22length_formatted%5C%22%3Bs%3A4%3A%5C%224%3A03%5C%22%3Bs%3A4%3A%5C%22band%5C%22%3Bs%3A10%3A%5C%22Kanye%20West%5C%22%3Bs%3A6%3A%5C%22artist%5C%22%3Bs%3A10%3A%5C%22Kanye%20West%5C%22%3Bs%3A5%3A%5C%22title%5C%22%3Bs%3A8%3A%5C%22I%20Wonder%5C%22%3Bs%3A5%3A%5C%22album%5C%22%3Bs%3A10%3A%5C%22Graduation%5C%22%3Bs%3A4%3A%5C%22year%5C%22%3Bs%3A4%3A%5C%222007%5C%22%3Bs%3A12%3A%5C%22track_number%5C%22%3Bs%3A2%3A%5C%2204%5C%22%3Bs%3A5%3A%5C%22genre%5C%22%3Bs%3A7%3A%5C%22Hip-Hop%5C%22%3Bs%3A16%3A%5C%22encoder_settings%5C%22%3Bs%3A10%3A%5C%22FLAC%201.2.1%5C%22%3Bs%3A5%3A%5C%22image%5C%22%3Ba%3A3%3A%7Bs%3A4%3A%5C%22mime%5C%22%3Bs%3A10%3A%5C%22image/jpeg%5C%22%3Bs%3A5%3A%5C%22width%5C%22%3Bi%3A300%3Bs%3A6%3A%5C%22height%5C%22%3Bi%3A300%3B%7D%7D",metaDeleted:false,file:{connect:{oldId:"621"}}}) { id } } `
    
MUTATIONS[45] = `mutation mutation45 { createFileMeta(data: {oldId:"4511",metaType:"",metaName:"attachedFile",metaValue:"2014/12/09-Flashing-Lights-feat-Dwele.mp3",metaDeleted:false,file:{connect:{oldId:"661"}}}) { id } } `
    
MUTATIONS[46] = `mutation mutation46 { createFileMeta(data: {oldId:"4521",metaType:"",metaName:"thumbnailId",metaValue:"381",metaDeleted:false,file:{connect:{oldId:"661"}}}) { id } } `
    
MUTATIONS[47] = `mutation mutation47 { createFileMeta(data: {oldId:"4531",metaType:"",metaName:"s3Info",metaValue:"/uploads/2015/03/09-Flashing-Lights-feat-Dwele.mp3",metaDeleted:false,file:{connect:{oldId:"661"}}}) { id } } `
    
MUTATIONS[48] = `mutation mutation48 { createFileMeta(data: {oldId:"4541",metaType:"",metaName:"fileMetadata",metaValue:"a%3A23%3A%7Bs%3A10%3A%5C%22dataformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22channels%5C%22%3Bi%3A2%3Bs%3A11%3A%5C%22sample_rate%5C%22%3Bi%3A44100%3Bs%3A7%3A%5C%22bitrate%5C%22%3Bi%3A320000%3Bs%3A11%3A%5C%22channelmode%5C%22%3Bs%3A6%3A%5C%22stereo%5C%22%3Bs%3A12%3A%5C%22bitrate_mode%5C%22%3Bs%3A3%3A%5C%22cbr%5C%22%3Bs%3A8%3A%5C%22lossless%5C%22%3Bb%3A0%3Bs%3A15%3A%5C%22encoder_options%5C%22%3Bs%3A6%3A%5C%22CBR320%5C%22%3Bs%3A17%3A%5C%22compression_ratio%5C%22%3Bd%3A0.22675736961451248%3Bs%3A10%3A%5C%22fileformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22filesize%5C%22%3Bi%3A9586622%3Bs%3A9%3A%5C%22mime_type%5C%22%3Bs%3A10%3A%5C%22audio/mpeg%5C%22%3Bs%3A6%3A%5C%22length%5C%22%3Bi%3A238%3Bs%3A16%3A%5C%22length_formatted%5C%22%3Bs%3A4%3A%5C%223%3A58%5C%22%3Bs%3A4%3A%5C%22band%5C%22%3Bs%3A10%3A%5C%22Kanye%20West%5C%22%3Bs%3A6%3A%5C%22artist%5C%22%3Bs%3A10%3A%5C%22Kanye%20West%5C%22%3Bs%3A5%3A%5C%22title%5C%22%3Bs%3A28%3A%5C%22Flashing%20Lights%20%28feat%20Dwele%29%5C%22%3Bs%3A5%3A%5C%22album%5C%22%3Bs%3A10%3A%5C%22Graduation%5C%22%3Bs%3A4%3A%5C%22year%5C%22%3Bs%3A4%3A%5C%222007%5C%22%3Bs%3A12%3A%5C%22track_number%5C%22%3Bs%3A2%3A%5C%2209%5C%22%3Bs%3A5%3A%5C%22genre%5C%22%3Bs%3A7%3A%5C%22Hip-Hop%5C%22%3Bs%3A16%3A%5C%22encoder_settings%5C%22%3Bs%3A10%3A%5C%22FLAC%201.2.1%5C%22%3Bs%3A5%3A%5C%22image%5C%22%3Ba%3A3%3A%7Bs%3A4%3A%5C%22mime%5C%22%3Bs%3A10%3A%5C%22image/jpeg%5C%22%3Bs%3A5%3A%5C%22width%5C%22%3Bi%3A300%3Bs%3A6%3A%5C%22height%5C%22%3Bi%3A300%3B%7D%7D",metaDeleted:false,file:{connect:{oldId:"661"}}}) { id } } `
    
MUTATIONS[49] = `mutation mutation49 { createFileMeta(data: {oldId:"5641",metaType:"",metaName:"attachedFile",metaValue:"2014/12/06-Cant-Tell-Me-Nothing3.mp3",metaDeleted:false,file:{connect:{oldId:"741"}}}) { id } } `
    
MUTATIONS[50] = `mutation mutation50 { createFileMeta(data: {oldId:"5651",metaType:"",metaName:"thumbnailId",metaValue:"381",metaDeleted:false,file:{connect:{oldId:"741"}}}) { id } } `
    
MUTATIONS[51] = `mutation mutation51 { createFileMeta(data: {oldId:"5661",metaType:"",metaName:"s3Info",metaValue:"/uploads/2015/03/06-Cant-Tell-Me-Nothing3.mp3",metaDeleted:false,file:{connect:{oldId:"741"}}}) { id } } `
    
MUTATIONS[52] = `mutation mutation52 { createFileMeta(data: {oldId:"5671",metaType:"",metaName:"fileMetadata",metaValue:"a%3A23%3A%7Bs%3A10%3A%5C%22dataformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22channels%5C%22%3Bi%3A2%3Bs%3A11%3A%5C%22sample_rate%5C%22%3Bi%3A44100%3Bs%3A7%3A%5C%22bitrate%5C%22%3Bi%3A320000%3Bs%3A11%3A%5C%22channelmode%5C%22%3Bs%3A6%3A%5C%22stereo%5C%22%3Bs%3A12%3A%5C%22bitrate_mode%5C%22%3Bs%3A3%3A%5C%22cbr%5C%22%3Bs%3A8%3A%5C%22lossless%5C%22%3Bb%3A0%3Bs%3A15%3A%5C%22encoder_options%5C%22%3Bs%3A6%3A%5C%22CBR320%5C%22%3Bs%3A17%3A%5C%22compression_ratio%5C%22%3Bd%3A0.22675736961451248%3Bs%3A10%3A%5C%22fileformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22filesize%5C%22%3Bi%3A10950205%3Bs%3A9%3A%5C%22mime_type%5C%22%3Bs%3A10%3A%5C%22audio/mpeg%5C%22%3Bs%3A6%3A%5C%22length%5C%22%3Bi%3A272%3Bs%3A16%3A%5C%22length_formatted%5C%22%3Bs%3A4%3A%5C%224%3A32%5C%22%3Bs%3A4%3A%5C%22band%5C%22%3Bs%3A10%3A%5C%22Kanye%20West%5C%22%3Bs%3A6%3A%5C%22artist%5C%22%3Bs%3A10%3A%5C%22Kanye%20West%5C%22%3Bs%3A5%3A%5C%22title%5C%22%3Bs%3A21%3A%5C%22Can%27t%20Tell%20Me%20Nothing%5C%22%3Bs%3A5%3A%5C%22album%5C%22%3Bs%3A10%3A%5C%22Graduation%5C%22%3Bs%3A4%3A%5C%22year%5C%22%3Bs%3A4%3A%5C%222007%5C%22%3Bs%3A12%3A%5C%22track_number%5C%22%3Bs%3A2%3A%5C%2206%5C%22%3Bs%3A5%3A%5C%22genre%5C%22%3Bs%3A7%3A%5C%22Hip-Hop%5C%22%3Bs%3A16%3A%5C%22encoder_settings%5C%22%3Bs%3A10%3A%5C%22FLAC%201.2.1%5C%22%3Bs%3A5%3A%5C%22image%5C%22%3Ba%3A3%3A%7Bs%3A4%3A%5C%22mime%5C%22%3Bs%3A10%3A%5C%22image/jpeg%5C%22%3Bs%3A5%3A%5C%22width%5C%22%3Bi%3A300%3Bs%3A6%3A%5C%22height%5C%22%3Bi%3A300%3B%7D%7D",metaDeleted:false,file:{connect:{oldId:"741"}}}) { id } } `
    
MUTATIONS[53] = `mutation mutation53 { createFileMeta(data: {oldId:"5681",metaType:"",metaName:"attachedFile",metaValue:"2014/12/graduation.jpg",metaDeleted:false,file:{connect:{oldId:"751"}}}) { id } } `
    
MUTATIONS[54] = `mutation mutation54 { createFileMeta(data: {oldId:"5691",metaType:"",metaName:"s3Info",metaValue:"/uploads/2014/12/graduation.jpg",metaDeleted:false,file:{connect:{oldId:"751"}}}) { id } } `
    
MUTATIONS[55] = `mutation mutation55 { createFileMeta(data: {oldId:"5701",metaType:"",metaName:"fileMetadata",metaValue:"a%3A4%3A%7Bs%3A5%3A%5C%22width%5C%22%3Bi%3A736%3Bs%3A6%3A%5C%22height%5C%22%3Bi%3A736%3Bs%3A4%3A%5C%22file%5C%22%3Bs%3A22%3A%5C%222014/12/graduation.jpg%5C%22%3Bs%3A10%3A%5C%22image_meta%5C%22%3Ba%3A11%3A%7Bs%3A8%3A%5C%22aperture%5C%22%3Bi%3A0%3Bs%3A6%3A%5C%22credit%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A6%3A%5C%22camera%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A7%3A%5C%22caption%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A17%3A%5C%22created_timestamp%5C%22%3Bi%3A0%3Bs%3A9%3A%5C%22copyright%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A12%3A%5C%22focal_length%5C%22%3Bi%3A0%3Bs%3A3%3A%5C%22iso%5C%22%3Bi%3A0%3Bs%3A13%3A%5C%22shutter_speed%5C%22%3Bi%3A0%3Bs%3A5%3A%5C%22title%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A11%3A%5C%22orientation%5C%22%3Bi%3A0%3B%7D%7D",metaDeleted:false,file:{connect:{oldId:"751"}}}) { id } } `
    
MUTATIONS[56] = `mutation mutation56 { createReviewMeta(data: {oldId:"6011",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"781"}}}) { id } } `
    
MUTATIONS[57] = `mutation mutation57 { createReviewMeta(data: {oldId:"6021",metaType:"",metaName:"preAuthorId",metaValue:"71",metaDeleted:false,review:{connect:{oldId:"781"}}}) { id } } `
    
MUTATIONS[58] = `mutation mutation58 { createReviewMeta(data: {oldId:"6031",metaType:"",metaName:"questionType3",metaValue:"mult_choice",metaDeleted:false,review:{connect:{oldId:"781"}}}) { id } } `
    
MUTATIONS[59] = `mutation mutation59 { createReviewMeta(data: {oldId:"6041",metaType:"",metaName:"questionAnswer3",metaValue:"1",metaDeleted:false,review:{connect:{oldId:"781"}}}) { id } } `
    
MUTATIONS[60] = `mutation mutation60 { createReviewMeta(data: {oldId:"6051",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"781"}}}) { id } } `
    
MUTATIONS[61] = `mutation mutation61 { createReviewMeta(data: {oldId:"6061",metaType:"",metaName:"questionAnswer2",metaValue:"2",metaDeleted:false,review:{connect:{oldId:"781"}}}) { id } } `
    
MUTATIONS[62] = `mutation mutation62 { createReviewMeta(data: {oldId:"6071",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"781"}}}) { id } } `
    
MUTATIONS[63] = `mutation mutation63 { createReviewMeta(data: {oldId:"6081",metaType:"",metaName:"questionAnswer1",metaValue:"No%2C%20I%20believe%20that%20he%20is%20expressing%20that%20you%20can%20only%20have%20a%20winner%27s%20attitude%20if%20you%20have%20money.%20He%20is%20expressing%20that%20money%20buys%20you%20happiness%20and%20makes%20you%20feel%20like%20a%20winner.%20Overall%20his%20attitude%20is%20not%20a%20positive%20reflection%20of%20a%20winning%20attitude.",metaDeleted:false,review:{connect:{oldId:"781"}}}) { id } } `
    
MUTATIONS[64] = `mutation mutation64 { createReviewMeta(data: {oldId:"6101",metaType:"",metaName:"assignmentId",metaValue:"3GS6S824SQX3MXB9VZ8OCHF1JN0NW5",metaDeleted:false,review:{connect:{oldId:"781"}}}) { id } } `
    
MUTATIONS[65] = `mutation mutation65 { createReviewMeta(data: {oldId:"6111",metaType:"",metaName:"hitId",metaValue:"39N6W9XWRDNYEQSTXU8FJAW1EUZYGT",metaDeleted:false,review:{connect:{oldId:"781"}}}) { id } } `
    
MUTATIONS[66] = `mutation mutation66 { createReviewMeta(data: {oldId:"6121",metaType:"",metaName:"workerId",metaValue:"A248G7WMC2OS7F",metaDeleted:false,review:{connect:{oldId:"781"}}}) { id } } `
    
MUTATIONS[67] = `mutation mutation67 { createReviewMeta(data: {oldId:"6131",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"801"}}}) { id } } `
    
MUTATIONS[68] = `mutation mutation68 { createReviewMeta(data: {oldId:"6141",metaType:"",metaName:"preAuthorId",metaValue:"91",metaDeleted:false,review:{connect:{oldId:"801"}}}) { id } } `
    
MUTATIONS[69] = `mutation mutation69 { createReviewMeta(data: {oldId:"6151",metaType:"",metaName:"questionType3",metaValue:"mult_choice",metaDeleted:false,review:{connect:{oldId:"801"}}}) { id } } `
    
MUTATIONS[70] = `mutation mutation70 { createReviewMeta(data: {oldId:"6161",metaType:"",metaName:"questionAnswer3",metaValue:"2",metaDeleted:false,review:{connect:{oldId:"801"}}}) { id } } `
    
MUTATIONS[71] = `mutation mutation71 { createReviewMeta(data: {oldId:"6171",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"801"}}}) { id } } `
    
MUTATIONS[72] = `mutation mutation72 { createReviewMeta(data: {oldId:"6181",metaType:"",metaName:"questionAnswer2",metaValue:"5",metaDeleted:false,review:{connect:{oldId:"801"}}}) { id } } `
    
MUTATIONS[73] = `mutation mutation73 { createReviewMeta(data: {oldId:"6191",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"801"}}}) { id } } `
    
MUTATIONS[74] = `mutation mutation74 { createReviewMeta(data: {oldId:"6201",metaType:"",metaName:"questionAnswer1",metaValue:"Yes%2C%20He%20expresses%20an%20attitude%20of%20a%20winner.%20He%20talks%20about%20being%20down%20and%20making%20a%20come%20back.%20Talks%20about%20making%20it%20big%20and%20getting%20his%20money.%20He%20says%20that%20they%20wont%20be%20able%20to%20tell%20him%20nothing%20because%20he%20will%20have%20money.",metaDeleted:false,review:{connect:{oldId:"801"}}}) { id } } `
    
MUTATIONS[75] = `mutation mutation75 { createReviewMeta(data: {oldId:"6221",metaType:"",metaName:"assignmentId",metaValue:"3B3WTRP3DB2WLF98G50C694SARP294",metaDeleted:false,review:{connect:{oldId:"801"}}}) { id } } `
    
MUTATIONS[76] = `mutation mutation76 { createReviewMeta(data: {oldId:"6231",metaType:"",metaName:"hitId",metaValue:"39N6W9XWRDNYEQSTXU8FJAW1EUZYGT",metaDeleted:false,review:{connect:{oldId:"801"}}}) { id } } `
    
MUTATIONS[77] = `mutation mutation77 { createReviewMeta(data: {oldId:"6241",metaType:"",metaName:"workerId",metaValue:"A1O69MO1Z20M0T",metaDeleted:false,review:{connect:{oldId:"801"}}}) { id } } `
    
MUTATIONS[78] = `mutation mutation78 { createReviewMeta(data: {oldId:"6261",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"821"}}}) { id } } `
    
MUTATIONS[79] = `mutation mutation79 { createReviewMeta(data: {oldId:"6271",metaType:"",metaName:"preAuthorId",metaValue:"101",metaDeleted:false,review:{connect:{oldId:"821"}}}) { id } } `
    
MUTATIONS[80] = `mutation mutation80 { createReviewMeta(data: {oldId:"6291",metaType:"",metaName:"questionType3",metaValue:"mult_choice",metaDeleted:false,review:{connect:{oldId:"821"}}}) { id } } `
    
MUTATIONS[81] = `mutation mutation81 { createReviewMeta(data: {oldId:"6301",metaType:"",metaName:"questionAnswer3",metaValue:"3",metaDeleted:false,review:{connect:{oldId:"821"}}}) { id } } `
    
MUTATIONS[82] = `mutation mutation82 { createReviewMeta(data: {oldId:"6311",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"821"}}}) { id } } `
    
MUTATIONS[83] = `mutation mutation83 { createReviewMeta(data: {oldId:"6321",metaType:"",metaName:"questionAnswer2",metaValue:"4",metaDeleted:false,review:{connect:{oldId:"821"}}}) { id } } `
    
MUTATIONS[84] = `mutation mutation84 { createReviewMeta(data: {oldId:"6331",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"821"}}}) { id } } `
    
MUTATIONS[85] = `mutation mutation85 { createReviewMeta(data: {oldId:"6341",metaType:"",metaName:"questionAnswer1",metaValue:"Yes.%20I%20think%20Kanye%20is%20talking%20about%20becoming%20successful%20and%20how%20he%20has%20worked%20to%20get%20to%20the%20point%20where%20he%20is.%20He%27s%20also%20expressing%20confidence%20about%20his%20abilities.%20",metaDeleted:false,review:{connect:{oldId:"821"}}}) { id } } `
    
MUTATIONS[86] = `mutation mutation86 { createReviewMeta(data: {oldId:"6351",metaType:"",metaName:"assignmentId",metaValue:"3DR23U6WE5E70AU27V0UZAET11ITEX",metaDeleted:false,review:{connect:{oldId:"821"}}}) { id } } `
    
MUTATIONS[87] = `mutation mutation87 { createReviewMeta(data: {oldId:"6361",metaType:"",metaName:"hitId",metaValue:"39N6W9XWRDNYEQSTXU8FJAW1EUZYGT",metaDeleted:false,review:{connect:{oldId:"821"}}}) { id } } `
    
MUTATIONS[88] = `mutation mutation88 { createReviewMeta(data: {oldId:"6371",metaType:"",metaName:"workerId",metaValue:"A2JCK494NV7TFX",metaDeleted:false,review:{connect:{oldId:"821"}}}) { id } } `
    
MUTATIONS[89] = `mutation mutation89 { createFileMeta(data: {oldId:"6381",metaType:"",metaName:"attachedFile",metaValue:"2014/12/04-I-Wonder1.mp3",metaDeleted:false,file:{connect:{oldId:"831"}}}) { id } } `
    
MUTATIONS[90] = `mutation mutation90 { createFileMeta(data: {oldId:"6391",metaType:"",metaName:"thumbnailId",metaValue:"381",metaDeleted:false,file:{connect:{oldId:"831"}}}) { id } } `
    
MUTATIONS[91] = `mutation mutation91 { createFileMeta(data: {oldId:"6401",metaType:"",metaName:"s3Info",metaValue:"/uploads/2015/03/04-I-Wonder1.mp3",metaDeleted:false,file:{connect:{oldId:"831"}}}) { id } } `
    
MUTATIONS[92] = `mutation mutation92 { createFileMeta(data: {oldId:"6411",metaType:"",metaName:"fileMetadata",metaValue:"a%3A23%3A%7Bs%3A10%3A%5C%22dataformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22channels%5C%22%3Bi%3A2%3Bs%3A11%3A%5C%22sample_rate%5C%22%3Bi%3A44100%3Bs%3A7%3A%5C%22bitrate%5C%22%3Bi%3A320000%3Bs%3A11%3A%5C%22channelmode%5C%22%3Bs%3A6%3A%5C%22stereo%5C%22%3Bs%3A12%3A%5C%22bitrate_mode%5C%22%3Bs%3A3%3A%5C%22cbr%5C%22%3Bs%3A8%3A%5C%22lossless%5C%22%3Bb%3A0%3Bs%3A15%3A%5C%22encoder_options%5C%22%3Bs%3A6%3A%5C%22CBR320%5C%22%3Bs%3A17%3A%5C%22compression_ratio%5C%22%3Bd%3A0.22675736961451248%3Bs%3A10%3A%5C%22fileformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22filesize%5C%22%3Bi%3A9823792%3Bs%3A9%3A%5C%22mime_type%5C%22%3Bs%3A10%3A%5C%22audio/mpeg%5C%22%3Bs%3A6%3A%5C%22length%5C%22%3Bi%3A243%3Bs%3A16%3A%5C%22length_formatted%5C%22%3Bs%3A4%3A%5C%224%3A03%5C%22%3Bs%3A4%3A%5C%22band%5C%22%3Bs%3A10%3A%5C%22Kanye%20West%5C%22%3Bs%3A6%3A%5C%22artist%5C%22%3Bs%3A10%3A%5C%22Kanye%20West%5C%22%3Bs%3A5%3A%5C%22title%5C%22%3Bs%3A8%3A%5C%22I%20Wonder%5C%22%3Bs%3A5%3A%5C%22album%5C%22%3Bs%3A10%3A%5C%22Graduation%5C%22%3Bs%3A4%3A%5C%22year%5C%22%3Bs%3A4%3A%5C%222007%5C%22%3Bs%3A12%3A%5C%22track_number%5C%22%3Bs%3A2%3A%5C%2204%5C%22%3Bs%3A5%3A%5C%22genre%5C%22%3Bs%3A7%3A%5C%22Hip-Hop%5C%22%3Bs%3A16%3A%5C%22encoder_settings%5C%22%3Bs%3A10%3A%5C%22FLAC%201.2.1%5C%22%3Bs%3A5%3A%5C%22image%5C%22%3Ba%3A3%3A%7Bs%3A4%3A%5C%22mime%5C%22%3Bs%3A10%3A%5C%22image/jpeg%5C%22%3Bs%3A5%3A%5C%22width%5C%22%3Bi%3A300%3Bs%3A6%3A%5C%22height%5C%22%3Bi%3A300%3B%7D%7D",metaDeleted:false,file:{connect:{oldId:"831"}}}) { id } } `
    
MUTATIONS[93] = `mutation mutation93 { createFileMeta(data: {oldId:"6421",metaType:"",metaName:"attachedFile",metaValue:"2014/12/graduation.jpg",metaDeleted:false,file:{connect:{oldId:"841"}}}) { id } } `
    
MUTATIONS[94] = `mutation mutation94 { createFileMeta(data: {oldId:"6431",metaType:"",metaName:"s3Info",metaValue:"/uploads/2014/12/graduation.jpg",metaDeleted:false,file:{connect:{oldId:"841"}}}) { id } } `
    
MUTATIONS[95] = `mutation mutation95 { createFileMeta(data: {oldId:"6441",metaType:"",metaName:"fileMetadata",metaValue:"a%3A4%3A%7Bs%3A5%3A%5C%22width%5C%22%3Bi%3A736%3Bs%3A6%3A%5C%22height%5C%22%3Bi%3A736%3Bs%3A4%3A%5C%22file%5C%22%3Bs%3A22%3A%5C%222014/12/graduation.jpg%5C%22%3Bs%3A10%3A%5C%22image_meta%5C%22%3Ba%3A11%3A%7Bs%3A8%3A%5C%22aperture%5C%22%3Bi%3A0%3Bs%3A6%3A%5C%22credit%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A6%3A%5C%22camera%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A7%3A%5C%22caption%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A17%3A%5C%22created_timestamp%5C%22%3Bi%3A0%3Bs%3A9%3A%5C%22copyright%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A12%3A%5C%22focal_length%5C%22%3Bi%3A0%3Bs%3A3%3A%5C%22iso%5C%22%3Bi%3A0%3Bs%3A13%3A%5C%22shutter_speed%5C%22%3Bi%3A0%3Bs%3A5%3A%5C%22title%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A11%3A%5C%22orientation%5C%22%3Bi%3A0%3B%7D%7D",metaDeleted:false,file:{connect:{oldId:"841"}}}) { id } } `
    
MUTATIONS[96] = `mutation mutation96 { createReviewMeta(data: {oldId:"6691",metaType:"",metaName:"preTrackId",metaValue:"851",metaDeleted:false,review:{connect:{oldId:"871"}}}) { id } } `
    
MUTATIONS[97] = `mutation mutation97 { createReviewMeta(data: {oldId:"6701",metaType:"",metaName:"preAuthorId",metaValue:"111",metaDeleted:false,review:{connect:{oldId:"871"}}}) { id } } `
    
MUTATIONS[98] = `mutation mutation98 { createReviewMeta(data: {oldId:"6711",metaType:"",metaName:"preTrackId",metaValue:"851",metaDeleted:false,review:{connect:{oldId:"891"}}}) { id } } `
    
MUTATIONS[99] = `mutation mutation99 { createReviewMeta(data: {oldId:"6721",metaType:"",metaName:"preAuthorId",metaValue:"121",metaDeleted:false,review:{connect:{oldId:"891"}}}) { id } } `
    
MUTATIONS[100] = `mutation mutation100 { createReviewMeta(data: {oldId:"6751",metaType:"",metaName:"questionType2",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"871"}}}) { id } } `
    
MUTATIONS[101] = `mutation mutation101 { createReviewMeta(data: {oldId:"6761",metaType:"",metaName:"questionAnswer2",metaValue:"The%20melody%20is%20catchy%20and%20his%20voice%20has%20a%20good%20tone%20and%20quality.%20You%20can%20dance%20to%20it%20or%20just%20sit%20back%20and%20bob%20your%20head.%20It%20would%20be%20good%20to%20listen%20to%20if%20you%20were%20angry.",metaDeleted:false,review:{connect:{oldId:"871"}}}) { id } } `
    
MUTATIONS[102] = `mutation mutation102 { createReviewMeta(data: {oldId:"6771",metaType:"",metaName:"questionType1",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"871"}}}) { id } } `
    
MUTATIONS[103] = `mutation mutation103 { createReviewMeta(data: {oldId:"6781",metaType:"",metaName:"questionAnswer1",metaValue:"2",metaDeleted:false,review:{connect:{oldId:"871"}}}) { id } } `
    
MUTATIONS[104] = `mutation mutation104 { createReviewMeta(data: {oldId:"6811",metaType:"",metaName:"assignmentId",metaValue:"3UJ1CZ6IZHP6PROU7U21LBCUMP8S59",metaDeleted:false,review:{connect:{oldId:"871"}}}) { id } } `
    
MUTATIONS[105] = `mutation mutation105 { createReviewMeta(data: {oldId:"6821",metaType:"",metaName:"hitId",metaValue:"356TQKY9XFX06RQARN6REKV6MCG78O",metaDeleted:false,review:{connect:{oldId:"871"}}}) { id } } `
    
MUTATIONS[106] = `mutation mutation106 { createReviewMeta(data: {oldId:"6831",metaType:"",metaName:"workerId",metaValue:"AXACO6GVBKNIO",metaDeleted:false,review:{connect:{oldId:"871"}}}) { id } } `
    
MUTATIONS[107] = `mutation mutation107 { createReviewMeta(data: {oldId:"6841",metaType:"",metaName:"preTrackId",metaValue:"851",metaDeleted:false,review:{connect:{oldId:"911"}}}) { id } } `
    
MUTATIONS[108] = `mutation mutation108 { createReviewMeta(data: {oldId:"6851",metaType:"",metaName:"preAuthorId",metaValue:"131",metaDeleted:false,review:{connect:{oldId:"911"}}}) { id } } `
    
MUTATIONS[109] = `mutation mutation109 { createReviewMeta(data: {oldId:"6861",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"931"}}}) { id } } `
    
MUTATIONS[110] = `mutation mutation110 { createReviewMeta(data: {oldId:"6871",metaType:"",metaName:"preAuthorId",metaValue:"151",metaDeleted:false,review:{connect:{oldId:"931"}}}) { id } } `
    
MUTATIONS[111] = `mutation mutation111 { createReviewMeta(data: {oldId:"6881",metaType:"",metaName:"preTrackId",metaValue:"851",metaDeleted:false,review:{connect:{oldId:"951"}}}) { id } } `
    
MUTATIONS[112] = `mutation mutation112 { createReviewMeta(data: {oldId:"6891",metaType:"",metaName:"preAuthorId",metaValue:"161",metaDeleted:false,review:{connect:{oldId:"951"}}}) { id } } `
    
MUTATIONS[113] = `mutation mutation113 { createReviewMeta(data: {oldId:"6901",metaType:"",metaName:"questionType2",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"951"}}}) { id } } `
    
MUTATIONS[114] = `mutation mutation114 { createReviewMeta(data: {oldId:"6911",metaType:"",metaName:"questionAnswer2",metaValue:"The%20way%20his%20lyrics%20line%20up%20with%20the%20beat%20is%20very%20satisfying%20to%20me.%20Its%20like%20taking%20a%20ride%20in%20a%20convertible%20car%20down%20by%20the%20beach%20with%20my%20homies.%20",metaDeleted:false,review:{connect:{oldId:"951"}}}) { id } } `
    
MUTATIONS[115] = `mutation mutation115 { createReviewMeta(data: {oldId:"6921",metaType:"",metaName:"questionType1",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"951"}}}) { id } } `
    
MUTATIONS[116] = `mutation mutation116 { createReviewMeta(data: {oldId:"6931",metaType:"",metaName:"questionAnswer1",metaValue:"8",metaDeleted:false,review:{connect:{oldId:"951"}}}) { id } } `
    
MUTATIONS[117] = `mutation mutation117 { createReviewMeta(data: {oldId:"6961",metaType:"",metaName:"assignmentId",metaValue:"358UUM7WRZ39BG20GYHTTLLURTN7RI",metaDeleted:false,review:{connect:{oldId:"951"}}}) { id } } `
    
MUTATIONS[118] = `mutation mutation118 { createReviewMeta(data: {oldId:"6971",metaType:"",metaName:"hitId",metaValue:"356TQKY9XFX06RQARN6REKV6MCG78O",metaDeleted:false,review:{connect:{oldId:"951"}}}) { id } } `
    
MUTATIONS[119] = `mutation mutation119 { createReviewMeta(data: {oldId:"6981",metaType:"",metaName:"workerId",metaValue:"A1ZQ6JK3OX8I57",metaDeleted:false,review:{connect:{oldId:"951"}}}) { id } } `
    
MUTATIONS[120] = `mutation mutation120 { createReviewMeta(data: {oldId:"7001",metaType:"",metaName:"preTrackId",metaValue:"851",metaDeleted:false,review:{connect:{oldId:"981"}}}) { id } } `
    
MUTATIONS[121] = `mutation mutation121 { createReviewMeta(data: {oldId:"7011",metaType:"",metaName:"preAuthorId",metaValue:"171",metaDeleted:false,review:{connect:{oldId:"981"}}}) { id } } `
    
MUTATIONS[122] = `mutation mutation122 { createReviewMeta(data: {oldId:"7021",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"991"}}}) { id } } `
    
MUTATIONS[123] = `mutation mutation123 { createReviewMeta(data: {oldId:"7031",metaType:"",metaName:"preAuthorId",metaValue:"161",metaDeleted:false,review:{connect:{oldId:"991"}}}) { id } } `
    
MUTATIONS[124] = `mutation mutation124 { createReviewMeta(data: {oldId:"7051",metaType:"",metaName:"questionType2",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"981"}}}) { id } } `
    
MUTATIONS[125] = `mutation mutation125 { createReviewMeta(data: {oldId:"7061",metaType:"",metaName:"questionAnswer2",metaValue:"The%20Percussion%2C%20Quite%20Simplistic%20but%20catchy.%0D%0AAnd%20the%20way%20the%20rap%20starts%2C%20the%20overlap%20is%20pretty%20nice.%0D%0ABut%20still%2C%20Kinda%20misses%20something%20which%20will%20tie%20this%20completely%20together.%0D%0AFeels%20a%20bit%20loose.",metaDeleted:false,review:{connect:{oldId:"981"}}}) { id } } `
    
MUTATIONS[126] = `mutation mutation126 { createReviewMeta(data: {oldId:"7071",metaType:"",metaName:"questionType1",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"981"}}}) { id } } `
    
MUTATIONS[127] = `mutation mutation127 { createReviewMeta(data: {oldId:"7081",metaType:"",metaName:"questionAnswer1",metaValue:"5",metaDeleted:false,review:{connect:{oldId:"981"}}}) { id } } `
    
MUTATIONS[128] = `mutation mutation128 { createReviewMeta(data: {oldId:"7111",metaType:"",metaName:"assignmentId",metaValue:"3LOZAJ85YDDMMBR6JL6QMCQAHUM2XT",metaDeleted:false,review:{connect:{oldId:"981"}}}) { id } } `
    
MUTATIONS[129] = `mutation mutation129 { createReviewMeta(data: {oldId:"7121",metaType:"",metaName:"hitId",metaValue:"356TQKY9XFX06RQARN6REKV6MCG78O",metaDeleted:false,review:{connect:{oldId:"981"}}}) { id } } `
    
MUTATIONS[130] = `mutation mutation130 { createReviewMeta(data: {oldId:"7131",metaType:"",metaName:"workerId",metaValue:"A1A3PJPJY960LC",metaDeleted:false,review:{connect:{oldId:"981"}}}) { id } } `
    
MUTATIONS[131] = `mutation mutation131 { createReviewMeta(data: {oldId:"7161",metaType:"",metaName:"questionType3",metaValue:"mult_choice",metaDeleted:false,review:{connect:{oldId:"991"}}}) { id } } `
    
MUTATIONS[132] = `mutation mutation132 { createReviewMeta(data: {oldId:"7171",metaType:"",metaName:"questionAnswer3",metaValue:"2",metaDeleted:false,review:{connect:{oldId:"991"}}}) { id } } `
    
MUTATIONS[133] = `mutation mutation133 { createReviewMeta(data: {oldId:"7181",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"991"}}}) { id } } `
    
MUTATIONS[134] = `mutation mutation134 { createReviewMeta(data: {oldId:"7191",metaType:"",metaName:"questionAnswer2",metaValue:"8",metaDeleted:false,review:{connect:{oldId:"991"}}}) { id } } `
    
MUTATIONS[135] = `mutation mutation135 { createReviewMeta(data: {oldId:"7201",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"991"}}}) { id } } `
    
MUTATIONS[136] = `mutation mutation136 { createReviewMeta(data: {oldId:"7211",metaType:"",metaName:"questionAnswer1",metaValue:"I%20think%20Kanye%20is%20expressing%20a%20winning%20attitude.%20He%20makes%20reference%20of%20falling/failing%20and%20going%20through%20the%20drama%20to%20move%20forward.%20He%20is%20independant%20of%20anyone%20and%20anything%2C%20thus%20winning.%20",metaDeleted:false,review:{connect:{oldId:"991"}}}) { id } } `
    
MUTATIONS[137] = `mutation mutation137 { createReviewMeta(data: {oldId:"7231",metaType:"",metaName:"assignmentId",metaValue:"3634BBTX0OU9XAEN8ULW3LXK2LNIFT",metaDeleted:false,review:{connect:{oldId:"991"}}}) { id } } `
    
MUTATIONS[138] = `mutation mutation138 { createReviewMeta(data: {oldId:"7241",metaType:"",metaName:"hitId",metaValue:"39N6W9XWRDNYEQSTXU8FJAW1EUZYGT",metaDeleted:false,review:{connect:{oldId:"991"}}}) { id } } `
    
MUTATIONS[139] = `mutation mutation139 { createReviewMeta(data: {oldId:"7251",metaType:"",metaName:"workerId",metaValue:"A1ZQ6JK3OX8I57",metaDeleted:false,review:{connect:{oldId:"991"}}}) { id } } `
    
MUTATIONS[140] = `mutation mutation140 { createReviewMeta(data: {oldId:"7261",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"1001"}}}) { id } } `
    
MUTATIONS[141] = `mutation mutation141 { createReviewMeta(data: {oldId:"7271",metaType:"",metaName:"preAuthorId",metaValue:"121",metaDeleted:false,review:{connect:{oldId:"1001"}}}) { id } } `
    
MUTATIONS[142] = `mutation mutation142 { createReviewMeta(data: {oldId:"7281",metaType:"",metaName:"questionType3",metaValue:"mult_choice",metaDeleted:false,review:{connect:{oldId:"1001"}}}) { id } } `
    
MUTATIONS[143] = `mutation mutation143 { createReviewMeta(data: {oldId:"7291",metaType:"",metaName:"questionAnswer3",metaValue:"1",metaDeleted:false,review:{connect:{oldId:"1001"}}}) { id } } `
    
MUTATIONS[144] = `mutation mutation144 { createReviewMeta(data: {oldId:"7301",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1001"}}}) { id } } `
    
MUTATIONS[145] = `mutation mutation145 { createReviewMeta(data: {oldId:"7311",metaType:"",metaName:"questionAnswer2",metaValue:"4",metaDeleted:false,review:{connect:{oldId:"1001"}}}) { id } } `
    
MUTATIONS[146] = `mutation mutation146 { createReviewMeta(data: {oldId:"7321",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1001"}}}) { id } } `
    
MUTATIONS[147] = `mutation mutation147 { createReviewMeta(data: {oldId:"7331",metaType:"",metaName:"questionAnswer1",metaValue:"I%20don%27t%20think%20he%20is%20expressing%20a%20winner%27s%20attitude%20necessarily%20in%20%5C%22Can%27t%20Tell%20Me%20Nothing.%5C%22%20He%20seems%20to%20be%20criticizing%20consumer%20culture%20%28let%20the%20champagne%20splash%2C%20collagen%20mention%2C%20dream%20about%20heaven/used%20that%20money%20for%20a%20necklace%29%20and%20hip%20hop%20culture.%20",metaDeleted:false,review:{connect:{oldId:"1001"}}}) { id } } `
    
MUTATIONS[148] = `mutation mutation148 { createReviewMeta(data: {oldId:"7351",metaType:"",metaName:"assignmentId",metaValue:"3HWRJOOET526LAHNIVV4P5I7ZI9SEC",metaDeleted:false,review:{connect:{oldId:"1001"}}}) { id } } `
    
MUTATIONS[149] = `mutation mutation149 { createReviewMeta(data: {oldId:"7361",metaType:"",metaName:"hitId",metaValue:"39N6W9XWRDNYEQSTXU8FJAW1EUZYGT",metaDeleted:false,review:{connect:{oldId:"1001"}}}) { id } } `
    
MUTATIONS[150] = `mutation mutation150 { createReviewMeta(data: {oldId:"7371",metaType:"",metaName:"workerId",metaValue:"A2ZWOPNOG2A5PX",metaDeleted:false,review:{connect:{oldId:"1001"}}}) { id } } `
    
MUTATIONS[151] = `mutation mutation151 { createReviewMeta(data: {oldId:"7381",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"1021"}}}) { id } } `
    
MUTATIONS[152] = `mutation mutation152 { createReviewMeta(data: {oldId:"7391",metaType:"",metaName:"preAuthorId",metaValue:"181",metaDeleted:false,review:{connect:{oldId:"1021"}}}) { id } } `
    
MUTATIONS[153] = `mutation mutation153 { createReviewMeta(data: {oldId:"7421",metaType:"",metaName:"preTrackId",metaValue:"851",metaDeleted:false,review:{connect:{oldId:"1041"}}}) { id } } `
    
MUTATIONS[154] = `mutation mutation154 { createReviewMeta(data: {oldId:"7431",metaType:"",metaName:"preAuthorId",metaValue:"191",metaDeleted:false,review:{connect:{oldId:"1041"}}}) { id } } `
    
MUTATIONS[155] = `mutation mutation155 { createReviewMeta(data: {oldId:"7441",metaType:"",metaName:"questionType3",metaValue:"mult_choice",metaDeleted:false,review:{connect:{oldId:"1021"}}}) { id } } `
    
MUTATIONS[156] = `mutation mutation156 { createReviewMeta(data: {oldId:"7451",metaType:"",metaName:"questionAnswer3",metaValue:"4",metaDeleted:false,review:{connect:{oldId:"1021"}}}) { id } } `
    
MUTATIONS[157] = `mutation mutation157 { createReviewMeta(data: {oldId:"7461",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1021"}}}) { id } } `
    
MUTATIONS[158] = `mutation mutation158 { createReviewMeta(data: {oldId:"7471",metaType:"",metaName:"questionAnswer2",metaValue:"9",metaDeleted:false,review:{connect:{oldId:"1021"}}}) { id } } `
    
MUTATIONS[159] = `mutation mutation159 { createReviewMeta(data: {oldId:"7481",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1021"}}}) { id } } `
    
MUTATIONS[160] = `mutation mutation160 { createReviewMeta(data: {oldId:"7491",metaType:"",metaName:"questionAnswer1",metaValue:"Yes...I%20like%20his%20voice%20%26%20the%20song.%20Can%27t%20tell%20me%20nothing%20its%20a%20beautiful%20song.%20Even%20the%20music%20is%20very%20good",metaDeleted:false,review:{connect:{oldId:"1021"}}}) { id } } `
    
MUTATIONS[161] = `mutation mutation161 { createReviewMeta(data: {oldId:"7511",metaType:"",metaName:"assignmentId",metaValue:"31HQ4X3T3SAKRGRFZHI8208R8FASLZ",metaDeleted:false,review:{connect:{oldId:"1021"}}}) { id } } `
    
MUTATIONS[162] = `mutation mutation162 { createReviewMeta(data: {oldId:"7521",metaType:"",metaName:"hitId",metaValue:"39N6W9XWRDNYEQSTXU8FJAW1EUZYGT",metaDeleted:false,review:{connect:{oldId:"1021"}}}) { id } } `
    
MUTATIONS[163] = `mutation mutation163 { createReviewMeta(data: {oldId:"7531",metaType:"",metaName:"workerId",metaValue:"A2OG4QIW2BK2EV",metaDeleted:false,review:{connect:{oldId:"1021"}}}) { id } } `
    
MUTATIONS[164] = `mutation mutation164 { createReviewMeta(data: {oldId:"7551",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"1071"}}}) { id } } `
    
MUTATIONS[165] = `mutation mutation165 { createReviewMeta(data: {oldId:"7561",metaType:"",metaName:"preAuthorId",metaValue:"241",metaDeleted:false,review:{connect:{oldId:"1071"}}}) { id } } `
    
MUTATIONS[166] = `mutation mutation166 { createReviewMeta(data: {oldId:"7571",metaType:"",metaName:"questionType3",metaValue:"mult_choice",metaDeleted:false,review:{connect:{oldId:"1071"}}}) { id } } `
    
MUTATIONS[167] = `mutation mutation167 { createReviewMeta(data: {oldId:"7581",metaType:"",metaName:"questionAnswer3",metaValue:"2",metaDeleted:false,review:{connect:{oldId:"1071"}}}) { id } } `
    
MUTATIONS[168] = `mutation mutation168 { createReviewMeta(data: {oldId:"7591",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1071"}}}) { id } } `
    
MUTATIONS[169] = `mutation mutation169 { createReviewMeta(data: {oldId:"7601",metaType:"",metaName:"questionAnswer2",metaValue:"9",metaDeleted:false,review:{connect:{oldId:"1071"}}}) { id } } `
    
MUTATIONS[170] = `mutation mutation170 { createReviewMeta(data: {oldId:"7611",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1071"}}}) { id } } `
    
MUTATIONS[171] = `mutation mutation171 { createReviewMeta(data: {oldId:"7621",metaType:"",metaName:"questionAnswer1",metaValue:"yes%20it%20looks%20as%20though%20Kayne%20wants%20to%20express%20winners%20attitude%20as%20the%20words%20say%20that%20this%20is%20my%20life%2C%20and%20the%20song%20means%20that%20you%20cannot%20tell%20me%20anything%20that%20I%20can%20change%2C%20as%20I%20am%20what%20I%20am%20and%20I%20feel%20treasured",metaDeleted:false,review:{connect:{oldId:"1071"}}}) { id } } `
    
MUTATIONS[172] = `mutation mutation172 { createReviewMeta(data: {oldId:"7641",metaType:"",metaName:"assignmentId",metaValue:"35GCEFQ6I5O0CON4O38G27BDV8N3Z5",metaDeleted:false,review:{connect:{oldId:"1071"}}}) { id } } `
    
MUTATIONS[173] = `mutation mutation173 { createReviewMeta(data: {oldId:"7651",metaType:"",metaName:"hitId",metaValue:"39N6W9XWRDNYEQSTXU8FJAW1EUZYGT",metaDeleted:false,review:{connect:{oldId:"1071"}}}) { id } } `
    
MUTATIONS[174] = `mutation mutation174 { createReviewMeta(data: {oldId:"7661",metaType:"",metaName:"workerId",metaValue:"A1BD1E2TE219Z1",metaDeleted:false,review:{connect:{oldId:"1071"}}}) { id } } `
    
MUTATIONS[175] = `mutation mutation175 { createReviewMeta(data: {oldId:"7671",metaType:"",metaName:"preTrackId",metaValue:"851",metaDeleted:false,review:{connect:{oldId:"1081"}}}) { id } } `
    
MUTATIONS[176] = `mutation mutation176 { createReviewMeta(data: {oldId:"7681",metaType:"",metaName:"preAuthorId",metaValue:"151",metaDeleted:false,review:{connect:{oldId:"1081"}}}) { id } } `
    
MUTATIONS[177] = `mutation mutation177 { createReviewMeta(data: {oldId:"7711",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"1101"}}}) { id } } `
    
MUTATIONS[178] = `mutation mutation178 { createReviewMeta(data: {oldId:"7721",metaType:"",metaName:"preAuthorId",metaValue:"261",metaDeleted:false,review:{connect:{oldId:"1101"}}}) { id } } `
    
MUTATIONS[179] = `mutation mutation179 { createReviewMeta(data: {oldId:"7731",metaType:"",metaName:"preTrackId",metaValue:"851",metaDeleted:false,review:{connect:{oldId:"1121"}}}) { id } } `
    
MUTATIONS[180] = `mutation mutation180 { createReviewMeta(data: {oldId:"7741",metaType:"",metaName:"preAuthorId",metaValue:"271",metaDeleted:false,review:{connect:{oldId:"1121"}}}) { id } } `
    
MUTATIONS[181] = `mutation mutation181 { createReviewMeta(data: {oldId:"7751",metaType:"",metaName:"questionType2",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1121"}}}) { id } } `
    
MUTATIONS[182] = `mutation mutation182 { createReviewMeta(data: {oldId:"7761",metaType:"",metaName:"questionAnswer2",metaValue:"I%20definitely%20like%20the%20piano%20and%20the%20melody.%20It%20is%20very%20unique.%20The%20drop%20is%20nice.%20The%20lyrics%20are%20very%20interesting%20and%20engaging.%20The%20production%20is%20very%20high%20quality%20and%20this%20is%20very%20apparent.",metaDeleted:false,review:{connect:{oldId:"1121"}}}) { id } } `
    
MUTATIONS[183] = `mutation mutation183 { createReviewMeta(data: {oldId:"7771",metaType:"",metaName:"questionType1",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1121"}}}) { id } } `
    
MUTATIONS[184] = `mutation mutation184 { createReviewMeta(data: {oldId:"7781",metaType:"",metaName:"questionAnswer1",metaValue:"5",metaDeleted:false,review:{connect:{oldId:"1121"}}}) { id } } `
    
MUTATIONS[185] = `mutation mutation185 { createReviewMeta(data: {oldId:"7811",metaType:"",metaName:"assignmentId",metaValue:"3E7TUJ2EGCMJOP7ODUKT2SVW7IR9DX",metaDeleted:false,review:{connect:{oldId:"1121"}}}) { id } } `
    
MUTATIONS[186] = `mutation mutation186 { createReviewMeta(data: {oldId:"7821",metaType:"",metaName:"hitId",metaValue:"356TQKY9XFX06RQARN6REKV6MCG78O",metaDeleted:false,review:{connect:{oldId:"1121"}}}) { id } } `
    
MUTATIONS[187] = `mutation mutation187 { createReviewMeta(data: {oldId:"7831",metaType:"",metaName:"workerId",metaValue:"A1A3TGZ7DKJWRW",metaDeleted:false,review:{connect:{oldId:"1121"}}}) { id } } `
    
MUTATIONS[188] = `mutation mutation188 { createReviewMeta(data: {oldId:"7841",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"1141"}}}) { id } } `
    
MUTATIONS[189] = `mutation mutation189 { createReviewMeta(data: {oldId:"7851",metaType:"",metaName:"preAuthorId",metaValue:"281",metaDeleted:false,review:{connect:{oldId:"1141"}}}) { id } } `
    
MUTATIONS[190] = `mutation mutation190 { createReviewMeta(data: {oldId:"7861",metaType:"",metaName:"questionType3",metaValue:"mult_choice",metaDeleted:false,review:{connect:{oldId:"1141"}}}) { id } } `
    
MUTATIONS[191] = `mutation mutation191 { createReviewMeta(data: {oldId:"7871",metaType:"",metaName:"questionAnswer3",metaValue:"1",metaDeleted:false,review:{connect:{oldId:"1141"}}}) { id } } `
    
MUTATIONS[192] = `mutation mutation192 { createReviewMeta(data: {oldId:"7881",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1141"}}}) { id } } `
    
MUTATIONS[193] = `mutation mutation193 { createReviewMeta(data: {oldId:"7891",metaType:"",metaName:"questionAnswer2",metaValue:"1",metaDeleted:false,review:{connect:{oldId:"1141"}}}) { id } } `
    
MUTATIONS[194] = `mutation mutation194 { createReviewMeta(data: {oldId:"7901",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1141"}}}) { id } } `
    
MUTATIONS[195] = `mutation mutation195 { createReviewMeta(data: {oldId:"7911",metaType:"",metaName:"questionAnswer1",metaValue:"no%20i%20dont%20like%20the%20lyrics%20at%20all.not%20my%20kind%20of%20music.the%20cover%20is%20neat.yea%20he%20has%20a%20attitude%20thats%20for%20show%20the%20way%20he%20was%20singing%20it.",metaDeleted:false,review:{connect:{oldId:"1141"}}}) { id } } `
    
MUTATIONS[196] = `mutation mutation196 { createReviewMeta(data: {oldId:"7921",metaType:"",metaName:"assignmentId",metaValue:"3VJ40NV2QINTC17R193Q4M87531TOE",metaDeleted:false,review:{connect:{oldId:"1141"}}}) { id } } `
    
MUTATIONS[197] = `mutation mutation197 { createReviewMeta(data: {oldId:"7931",metaType:"",metaName:"hitId",metaValue:"39N6W9XWRDNYEQSTXU8FJAW1EUZYGT",metaDeleted:false,review:{connect:{oldId:"1141"}}}) { id } } `
    
MUTATIONS[198] = `mutation mutation198 { createReviewMeta(data: {oldId:"7941",metaType:"",metaName:"workerId",metaValue:"A20NDRGSZZRQF",metaDeleted:false,review:{connect:{oldId:"1141"}}}) { id } } `
    
MUTATIONS[199] = `mutation mutation199 { createReviewMeta(data: {oldId:"7951",metaType:"",metaName:"preTrackId",metaValue:"851",metaDeleted:false,review:{connect:{oldId:"1151"}}}) { id } } `
    
MUTATIONS[200] = `mutation mutation200 { createReviewMeta(data: {oldId:"7961",metaType:"",metaName:"preAuthorId",metaValue:"281",metaDeleted:false,review:{connect:{oldId:"1151"}}}) { id } } `
    
MUTATIONS[201] = `mutation mutation201 { createReviewMeta(data: {oldId:"7971",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"1171"}}}) { id } } `
    
MUTATIONS[202] = `mutation mutation202 { createReviewMeta(data: {oldId:"7981",metaType:"",metaName:"preAuthorId",metaValue:"311",metaDeleted:false,review:{connect:{oldId:"1171"}}}) { id } } `
    
MUTATIONS[203] = `mutation mutation203 { createReviewMeta(data: {oldId:"7991",metaType:"",metaName:"questionType3",metaValue:"mult_choice",metaDeleted:false,review:{connect:{oldId:"1171"}}}) { id } } `
    
MUTATIONS[204] = `mutation mutation204 { createReviewMeta(data: {oldId:"8001",metaType:"",metaName:"questionAnswer3",metaValue:"4",metaDeleted:false,review:{connect:{oldId:"1171"}}}) { id } } `
    
MUTATIONS[205] = `mutation mutation205 { createReviewMeta(data: {oldId:"8011",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1171"}}}) { id } } `
    
MUTATIONS[206] = `mutation mutation206 { createReviewMeta(data: {oldId:"8021",metaType:"",metaName:"questionAnswer2",metaValue:"7",metaDeleted:false,review:{connect:{oldId:"1171"}}}) { id } } `
    
MUTATIONS[207] = `mutation mutation207 { createReviewMeta(data: {oldId:"8031",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1171"}}}) { id } } `
    
MUTATIONS[208] = `mutation mutation208 { createReviewMeta(data: {oldId:"8041",metaType:"",metaName:"questionAnswer1",metaValue:"No.%20%20In%20this%20song%2C%20Kanye%20speaks%20about%20the%20struggle%20of%20becoming%20rich%20in%20an%20oppressed%20world.%20%20He%20makes%20many%20biblical%20references%20to%20illustrate%20the%20idea%20that%20materialism%20is%20bad%2C%20but%20people%20from%20his%20upbringing%20still%20tend%20to%20engage%20in%20it.%20%20He%20is%20conflicted%20about%20his%20success.",metaDeleted:false,review:{connect:{oldId:"1171"}}}) { id } } `
    
MUTATIONS[209] = `mutation mutation209 { createReviewMeta(data: {oldId:"8061",metaType:"",metaName:"assignmentId",metaValue:"33PPUNGG385SVQ86ZT9CK5ET1MARZ4",metaDeleted:false,review:{connect:{oldId:"1171"}}}) { id } } `
    
MUTATIONS[210] = `mutation mutation210 { createReviewMeta(data: {oldId:"8071",metaType:"",metaName:"hitId",metaValue:"356TQKY9XFX06RQARN6REKV6MCG78O",metaDeleted:false,review:{connect:{oldId:"1171"}}}) { id } } `
    
MUTATIONS[211] = `mutation mutation211 { createReviewMeta(data: {oldId:"8081",metaType:"",metaName:"workerId",metaValue:"A35VS017CP0B1R",metaDeleted:false,review:{connect:{oldId:"1171"}}}) { id } } `
    
MUTATIONS[212] = `mutation mutation212 { createReviewMeta(data: {oldId:"8091",metaType:"",metaName:"preTrackId",metaValue:"851",metaDeleted:false,review:{connect:{oldId:"1181"}}}) { id } } `
    
MUTATIONS[213] = `mutation mutation213 { createReviewMeta(data: {oldId:"8101",metaType:"",metaName:"preAuthorId",metaValue:"321",metaDeleted:false,review:{connect:{oldId:"1181"}}}) { id } } `
    
MUTATIONS[214] = `mutation mutation214 { createReviewMeta(data: {oldId:"8111",metaType:"",metaName:"preTrackId",metaValue:"851",metaDeleted:false,review:{connect:{oldId:"1191"}}}) { id } } `
    
MUTATIONS[215] = `mutation mutation215 { createReviewMeta(data: {oldId:"8121",metaType:"",metaName:"preAuthorId",metaValue:"241",metaDeleted:false,review:{connect:{oldId:"1191"}}}) { id } } `
    
MUTATIONS[216] = `mutation mutation216 { createReviewMeta(data: {oldId:"8131",metaType:"",metaName:"questionType2",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1191"}}}) { id } } `
    
MUTATIONS[217] = `mutation mutation217 { createReviewMeta(data: {oldId:"8141",metaType:"",metaName:"questionAnswer2",metaValue:"The%20sound%20production%20is%20what%20I%20loved%20the%20most%20in%20this%20song.%20The%20lyrics%20is%20good%20and%20so%20is%20his%20voice.%20But%20what%20appeals%20the%20most%20is%20the%20sound%2C%20the%20way%20it%20goes%20from%20slow%20to%20fast%20beats%20and%20then%20again%20slow%2C%20with%20background%20effects.%20",metaDeleted:false,review:{connect:{oldId:"1191"}}}) { id } } `
    
MUTATIONS[218] = `mutation mutation218 { createReviewMeta(data: {oldId:"8151",metaType:"",metaName:"questionType1",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1191"}}}) { id } } `
    
MUTATIONS[219] = `mutation mutation219 { createReviewMeta(data: {oldId:"8161",metaType:"",metaName:"questionAnswer1",metaValue:"7",metaDeleted:false,review:{connect:{oldId:"1191"}}}) { id } } `
    
MUTATIONS[220] = `mutation mutation220 { createReviewMeta(data: {oldId:"8191",metaType:"",metaName:"assignmentId",metaValue:"3E7TUJ2EGCMJOP7ODUKT2SVW7IV9D1",metaDeleted:false,review:{connect:{oldId:"1191"}}}) { id } } `
    
MUTATIONS[221] = `mutation mutation221 { createReviewMeta(data: {oldId:"8201",metaType:"",metaName:"hitId",metaValue:"356TQKY9XFX06RQARN6REKV6MCG78O",metaDeleted:false,review:{connect:{oldId:"1191"}}}) { id } } `
    
MUTATIONS[222] = `mutation mutation222 { createReviewMeta(data: {oldId:"8211",metaType:"",metaName:"workerId",metaValue:"A1BD1E2TE219Z1",metaDeleted:false,review:{connect:{oldId:"1191"}}}) { id } } `
    
MUTATIONS[223] = `mutation mutation223 { createReviewMeta(data: {oldId:"8221",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"1211"}}}) { id } } `
    
MUTATIONS[224] = `mutation mutation224 { createReviewMeta(data: {oldId:"8231",metaType:"",metaName:"preAuthorId",metaValue:"331",metaDeleted:false,review:{connect:{oldId:"1211"}}}) { id } } `
    
MUTATIONS[225] = `mutation mutation225 { createReviewMeta(data: {oldId:"8241",metaType:"",metaName:"questionType3",metaValue:"mult_choice",metaDeleted:false,review:{connect:{oldId:"1211"}}}) { id } } `
    
MUTATIONS[226] = `mutation mutation226 { createReviewMeta(data: {oldId:"8251",metaType:"",metaName:"questionAnswer3",metaValue:"4",metaDeleted:false,review:{connect:{oldId:"1211"}}}) { id } } `
    
MUTATIONS[227] = `mutation mutation227 { createReviewMeta(data: {oldId:"8261",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1211"}}}) { id } } `
    
MUTATIONS[228] = `mutation mutation228 { createReviewMeta(data: {oldId:"8271",metaType:"",metaName:"questionAnswer2",metaValue:"8",metaDeleted:false,review:{connect:{oldId:"1211"}}}) { id } } `
    
MUTATIONS[229] = `mutation mutation229 { createReviewMeta(data: {oldId:"8281",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1211"}}}) { id } } `
    
MUTATIONS[230] = `mutation mutation230 { createReviewMeta(data: {oldId:"8291",metaType:"",metaName:"questionAnswer1",metaValue:"Definitely.%20He%20is%20very%20confident%20about%20himself.%20But%20at%20times%20he%20seems%20to%20be%20overconfident.%20Money%20seems%20to%20motivate%20him%20more%20than%20anything%20else.%20He%20has%20a%20swagger%20in%20his%20song%20that%20makes%20fun%20of%20other%20people.",metaDeleted:false,review:{connect:{oldId:"1211"}}}) { id } } `
    
MUTATIONS[231] = `mutation mutation231 { createReviewMeta(data: {oldId:"8311",metaType:"",metaName:"assignmentId",metaValue:"3KXIR214I4GVO93WZA4LP1TCOZS24P",metaDeleted:false,review:{connect:{oldId:"1211"}}}) { id } } `
    
MUTATIONS[232] = `mutation mutation232 { createReviewMeta(data: {oldId:"8321",metaType:"",metaName:"hitId",metaValue:"356TQKY9XFX06RQARN6REKV6MCG78O",metaDeleted:false,review:{connect:{oldId:"1211"}}}) { id } } `
    
MUTATIONS[233] = `mutation mutation233 { createReviewMeta(data: {oldId:"8331",metaType:"",metaName:"workerId",metaValue:"A1RSAU5I9NZTOP",metaDeleted:false,review:{connect:{oldId:"1211"}}}) { id } } `
    
MUTATIONS[234] = `mutation mutation234 { createReviewMeta(data: {oldId:"8341",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"1231"}}}) { id } } `
    
MUTATIONS[235] = `mutation mutation235 { createReviewMeta(data: {oldId:"8351",metaType:"",metaName:"preAuthorId",metaValue:"341",metaDeleted:false,review:{connect:{oldId:"1231"}}}) { id } } `
    
MUTATIONS[236] = `mutation mutation236 { createReviewMeta(data: {oldId:"8361",metaType:"",metaName:"questionType3",metaValue:"mult_choice",metaDeleted:false,review:{connect:{oldId:"1231"}}}) { id } } `
    
MUTATIONS[237] = `mutation mutation237 { createReviewMeta(data: {oldId:"8371",metaType:"",metaName:"questionAnswer3",metaValue:"4",metaDeleted:false,review:{connect:{oldId:"1231"}}}) { id } } `
    
MUTATIONS[238] = `mutation mutation238 { createReviewMeta(data: {oldId:"8381",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1231"}}}) { id } } `
    
MUTATIONS[239] = `mutation mutation239 { createReviewMeta(data: {oldId:"8391",metaType:"",metaName:"questionAnswer2",metaValue:"9",metaDeleted:false,review:{connect:{oldId:"1231"}}}) { id } } `
    
MUTATIONS[240] = `mutation mutation240 { createReviewMeta(data: {oldId:"8401",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1231"}}}) { id } } `
    
MUTATIONS[241] = `mutation mutation241 { createReviewMeta(data: {oldId:"8411",metaType:"",metaName:"questionAnswer1",metaValue:"Yes%2C%20because%20the%20song%20is%20about%20getting%20through%20adversity%20and%20when%20you%20do%20you%20will%20get%20%20the%20rewards%20that%20are%20what%20you%20worked%20for.%20A%20winner%27s%20attitude%20can%20be%20based%20on%20a%20overcoming%2C%20and%20that%20what%20this%20song%20represents%20to%20me.",metaDeleted:false,review:{connect:{oldId:"1231"}}}) { id } } `
    
MUTATIONS[242] = `mutation mutation242 { createReviewMeta(data: {oldId:"8431",metaType:"",metaName:"assignmentId",metaValue:"3KXIR214I4GVO93WZA4LP1TCOZU42T",metaDeleted:false,review:{connect:{oldId:"1231"}}}) { id } } `
    
MUTATIONS[243] = `mutation mutation243 { createReviewMeta(data: {oldId:"8441",metaType:"",metaName:"hitId",metaValue:"356TQKY9XFX06RQARN6REKV6MCG78O",metaDeleted:false,review:{connect:{oldId:"1231"}}}) { id } } `
    
MUTATIONS[244] = `mutation mutation244 { createReviewMeta(data: {oldId:"8451",metaType:"",metaName:"workerId",metaValue:"A3RJF3M0VJB8XW",metaDeleted:false,review:{connect:{oldId:"1231"}}}) { id } } `
    
MUTATIONS[245] = `mutation mutation245 { createReviewMeta(data: {oldId:"8461",metaType:"",metaName:"preTrackId",metaValue:"851",metaDeleted:false,review:{connect:{oldId:"1241"}}}) { id } } `
    
MUTATIONS[246] = `mutation mutation246 { createReviewMeta(data: {oldId:"8471",metaType:"",metaName:"preAuthorId",metaValue:"341",metaDeleted:false,review:{connect:{oldId:"1241"}}}) { id } } `
    
MUTATIONS[247] = `mutation mutation247 { createReviewMeta(data: {oldId:"8481",metaType:"",metaName:"questionType2",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1241"}}}) { id } } `
    
MUTATIONS[248] = `mutation mutation248 { createReviewMeta(data: {oldId:"8491",metaType:"",metaName:"questionAnswer2",metaValue:"I%20like%20a%20blend%20of%20all%20the%20elements%20of%20this%20song%2C%20the%20beat%20is%20on%20point%20with%20the%20snare%20kicking%20it.%20He%20has%20a%20methodical%20voice%20that%20captures%20your%20attention%20and%20flows%20with%20the%20music.%20And%2C%20the%20sound%20production%20is%20crisp%20and%20clean%2C%20but%20I%20would%20have%20to%20give%20the%20lyrics%20the%20thumbs%20up%2C%20as%20the%20element%20I%20like%20the%20most.",metaDeleted:false,review:{connect:{oldId:"1241"}}}) { id } } `
    
MUTATIONS[249] = `mutation mutation249 { createReviewMeta(data: {oldId:"8501",metaType:"",metaName:"questionType1",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1241"}}}) { id } } `
    
MUTATIONS[250] = `mutation mutation250 { createReviewMeta(data: {oldId:"8511",metaType:"",metaName:"questionAnswer1",metaValue:"8",metaDeleted:false,review:{connect:{oldId:"1241"}}}) { id } } `
    
MUTATIONS[251] = `mutation mutation251 { createReviewMeta(data: {oldId:"8541",metaType:"",metaName:"assignmentId",metaValue:"3CTOC39K37QSDSJN8T8KRUZ3HC6J7F",metaDeleted:false,review:{connect:{oldId:"1241"}}}) { id } } `
    
MUTATIONS[252] = `mutation mutation252 { createReviewMeta(data: {oldId:"8551",metaType:"",metaName:"hitId",metaValue:"39N6W9XWRDNYEQSTXU8FJAW1EUZYGT",metaDeleted:false,review:{connect:{oldId:"1241"}}}) { id } } `
    
MUTATIONS[253] = `mutation mutation253 { createReviewMeta(data: {oldId:"8561",metaType:"",metaName:"workerId",metaValue:"A3RJF3M0VJB8XW",metaDeleted:false,review:{connect:{oldId:"1241"}}}) { id } } `
    
MUTATIONS[254] = `mutation mutation254 { createReviewMeta(data: {oldId:"8571",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"1261"}}}) { id } } `
    
MUTATIONS[255] = `mutation mutation255 { createReviewMeta(data: {oldId:"8581",metaType:"",metaName:"preAuthorId",metaValue:"351",metaDeleted:false,review:{connect:{oldId:"1261"}}}) { id } } `
    
MUTATIONS[256] = `mutation mutation256 { createReviewMeta(data: {oldId:"8591",metaType:"",metaName:"questionType3",metaValue:"mult_choice",metaDeleted:false,review:{connect:{oldId:"1261"}}}) { id } } `
    
MUTATIONS[257] = `mutation mutation257 { createReviewMeta(data: {oldId:"8601",metaType:"",metaName:"questionAnswer3",metaValue:"4",metaDeleted:false,review:{connect:{oldId:"1261"}}}) { id } } `
    
MUTATIONS[258] = `mutation mutation258 { createReviewMeta(data: {oldId:"8611",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1261"}}}) { id } } `
    
MUTATIONS[259] = `mutation mutation259 { createReviewMeta(data: {oldId:"8621",metaType:"",metaName:"questionAnswer2",metaValue:"4",metaDeleted:false,review:{connect:{oldId:"1261"}}}) { id } } `
    
MUTATIONS[260] = `mutation mutation260 { createReviewMeta(data: {oldId:"8631",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1261"}}}) { id } } `
    
MUTATIONS[261] = `mutation mutation261 { createReviewMeta(data: {oldId:"8641",metaType:"",metaName:"questionAnswer1",metaValue:"Yes.%20He%27s%20telling%20about%20how%20we%20should%20be%20if%20we%20have%20money%20and%20the%20attitude%20we%20will%20have%20after%20the%20win",metaDeleted:false,review:{connect:{oldId:"1261"}}}) { id } } `
    
MUTATIONS[262] = `mutation mutation262 { createReviewMeta(data: {oldId:"8661",metaType:"",metaName:"assignmentId",metaValue:"3B837J3LDOWVUEMS41F4OCHQE7HRS6",metaDeleted:false,review:{connect:{oldId:"1261"}}}) { id } } `
    
MUTATIONS[263] = `mutation mutation263 { createReviewMeta(data: {oldId:"8671",metaType:"",metaName:"hitId",metaValue:"356TQKY9XFX06RQARN6REKV6MCG78O",metaDeleted:false,review:{connect:{oldId:"1261"}}}) { id } } `
    
MUTATIONS[264] = `mutation mutation264 { createReviewMeta(data: {oldId:"8681",metaType:"",metaName:"workerId",metaValue:"A13ZAQJQO0EN46",metaDeleted:false,review:{connect:{oldId:"1261"}}}) { id } } `
    
MUTATIONS[265] = `mutation mutation265 { createFileMeta(data: {oldId:"8691",metaType:"",metaName:"attachedFile",metaValue:"2014/12/IMG_0650.jpg",metaDeleted:false,file:{connect:{oldId:"1271"}}}) { id } } `
    
MUTATIONS[266] = `mutation mutation266 { createFileMeta(data: {oldId:"8701",metaType:"",metaName:"s3Info",metaValue:"/uploads/2014/12/IMG_0650.jpg",metaDeleted:false,file:{connect:{oldId:"1271"}}}) { id } } `
    
MUTATIONS[267] = `mutation mutation267 { createFileMeta(data: {oldId:"8711",metaType:"",metaName:"fileMetadata",metaValue:"a%3A4%3A%7Bs%3A5%3A%5C%22width%5C%22%3Bi%3A3456%3Bs%3A6%3A%5C%22height%5C%22%3Bi%3A5184%3Bs%3A4%3A%5C%22file%5C%22%3Bs%3A20%3A%5C%222014/12/IMG_0650.jpg%5C%22%3Bs%3A10%3A%5C%22image_meta%5C%22%3Ba%3A11%3A%7Bs%3A8%3A%5C%22aperture%5C%22%3Bi%3A0%3Bs%3A6%3A%5C%22credit%5C%22%3Bs%3A6%3A%5C%22Picasa%5C%22%3Bs%3A6%3A%5C%22camera%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A7%3A%5C%22caption%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A17%3A%5C%22created_timestamp%5C%22%3Bi%3A0%3Bs%3A9%3A%5C%22copyright%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A12%3A%5C%22focal_length%5C%22%3Bi%3A0%3Bs%3A3%3A%5C%22iso%5C%22%3Bi%3A0%3Bs%3A13%3A%5C%22shutter_speed%5C%22%3Bi%3A0%3Bs%3A5%3A%5C%22title%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A11%3A%5C%22orientation%5C%22%3Bi%3A0%3B%7D%7D",metaDeleted:false,file:{connect:{oldId:"1271"}}}) { id } } `
    
MUTATIONS[268] = `mutation mutation268 { createReviewMeta(data: {oldId:"8721",metaType:"",metaName:"preTrackId",metaValue:"851",metaDeleted:false,review:{connect:{oldId:"1291"}}}) { id } } `
    
MUTATIONS[269] = `mutation mutation269 { createReviewMeta(data: {oldId:"8731",metaType:"",metaName:"preAuthorId",metaValue:"361",metaDeleted:false,review:{connect:{oldId:"1291"}}}) { id } } `
    
MUTATIONS[270] = `mutation mutation270 { createReviewMeta(data: {oldId:"8741",metaType:"",metaName:"questionType2",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1291"}}}) { id } } `
    
MUTATIONS[271] = `mutation mutation271 { createReviewMeta(data: {oldId:"8751",metaType:"",metaName:"questionAnswer2",metaValue:"Voice%20resembles%20to%20Akon%2Clyrics%20are%20also%20good.Song%20is%20somewhat%20unique%2Ci%20really%20like%20the%20way%20he%20sings.it%27s%20an%20aaltogather%20different%20song%20and%20lyrics%20from%20other%20songs.",metaDeleted:false,review:{connect:{oldId:"1291"}}}) { id } } `
    
MUTATIONS[272] = `mutation mutation272 { createReviewMeta(data: {oldId:"8761",metaType:"",metaName:"questionType1",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1291"}}}) { id } } `
    
MUTATIONS[273] = `mutation mutation273 { createReviewMeta(data: {oldId:"8771",metaType:"",metaName:"questionAnswer1",metaValue:"",metaDeleted:false,review:{connect:{oldId:"1291"}}}) { id } } `
    
MUTATIONS[274] = `mutation mutation274 { createReviewMeta(data: {oldId:"8791",metaType:"",metaName:"assignmentId",metaValue:"3ZV9H2YQQD7WITIZDGO933HVE603WW",metaDeleted:false,review:{connect:{oldId:"1291"}}}) { id } } `
    
MUTATIONS[275] = `mutation mutation275 { createReviewMeta(data: {oldId:"8801",metaType:"",metaName:"hitId",metaValue:"356TQKY9XFX06RQARN6REKV6MCG78O",metaDeleted:false,review:{connect:{oldId:"1291"}}}) { id } } `
    
MUTATIONS[276] = `mutation mutation276 { createReviewMeta(data: {oldId:"8811",metaType:"",metaName:"workerId",metaValue:"A3H2HDKTZR6QXB",metaDeleted:false,review:{connect:{oldId:"1291"}}}) { id } } `
    
MUTATIONS[277] = `mutation mutation277 { createReviewMeta(data: {oldId:"8821",metaType:"",metaName:"preTrackId",metaValue:"851",metaDeleted:false,review:{connect:{oldId:"1311"}}}) { id } } `
    
MUTATIONS[278] = `mutation mutation278 { createReviewMeta(data: {oldId:"8831",metaType:"",metaName:"preAuthorId",metaValue:"381",metaDeleted:false,review:{connect:{oldId:"1311"}}}) { id } } `
    
MUTATIONS[279] = `mutation mutation279 { createReviewMeta(data: {oldId:"8841",metaType:"",metaName:"questionType2",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1311"}}}) { id } } `
    
MUTATIONS[280] = `mutation mutation280 { createReviewMeta(data: {oldId:"8851",metaType:"",metaName:"questionAnswer2",metaValue:"I%20mostly%20like%20the%20sound/production.%20It%27s%20upbeat%20and%20sounds%20fairly%20positive.%20The%20sample%20is%20really%20interesting%2C%20but%20repetitive.%20I%20do%20like%20the%20voice%20of%20the%20singer%20in%20the%20sample%2C%20but%20I%20prefer%20listening%20to%20the%20main%20singer.%20The%20lyrics%20don%27t%20have%20much%20of%20an%20impact%20on%20me.",metaDeleted:false,review:{connect:{oldId:"1311"}}}) { id } } `
    
MUTATIONS[281] = `mutation mutation281 { createReviewMeta(data: {oldId:"8861",metaType:"",metaName:"questionType1",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1311"}}}) { id } } `
    
MUTATIONS[282] = `mutation mutation282 { createReviewMeta(data: {oldId:"8871",metaType:"",metaName:"questionAnswer1",metaValue:"8",metaDeleted:false,review:{connect:{oldId:"1311"}}}) { id } } `
    
MUTATIONS[283] = `mutation mutation283 { createReviewMeta(data: {oldId:"8901",metaType:"",metaName:"assignmentId",metaValue:"3QY5DC2MXRKE619N2BAAMOLVWH0FUQ",metaDeleted:false,review:{connect:{oldId:"1311"}}}) { id } } `
    
MUTATIONS[284] = `mutation mutation284 { createReviewMeta(data: {oldId:"8911",metaType:"",metaName:"hitId",metaValue:"39N6W9XWRDNYEQSTXU8FJAW1EUZYGT",metaDeleted:false,review:{connect:{oldId:"1311"}}}) { id } } `
    
MUTATIONS[285] = `mutation mutation285 { createReviewMeta(data: {oldId:"8921",metaType:"",metaName:"workerId",metaValue:"AQ4NUYZWCDZ73",metaDeleted:false,review:{connect:{oldId:"1311"}}}) { id } } `
    
MUTATIONS[286] = `mutation mutation286 { createReviewMeta(data: {oldId:"8931",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"1331"}}}) { id } } `
    
MUTATIONS[287] = `mutation mutation287 { createReviewMeta(data: {oldId:"8941",metaType:"",metaName:"preAuthorId",metaValue:"391",metaDeleted:false,review:{connect:{oldId:"1331"}}}) { id } } `
    
MUTATIONS[288] = `mutation mutation288 { createReviewMeta(data: {oldId:"8951",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"1351"}}}) { id } } `
    
MUTATIONS[289] = `mutation mutation289 { createReviewMeta(data: {oldId:"8961",metaType:"",metaName:"preAuthorId",metaValue:"401",metaDeleted:false,review:{connect:{oldId:"1351"}}}) { id } } `
    
MUTATIONS[290] = `mutation mutation290 { createFileMeta(data: {oldId:"8971",metaType:"",metaName:"attachedFile",metaValue:"2014/12/13-Big-Brother.mp3",metaDeleted:false,file:{connect:{oldId:"1361"}}}) { id } } `
    
MUTATIONS[291] = `mutation mutation291 { createFileMeta(data: {oldId:"8981",metaType:"",metaName:"thumbnailId",metaValue:"381",metaDeleted:false,file:{connect:{oldId:"1361"}}}) { id } } `
    
MUTATIONS[292] = `mutation mutation292 { createFileMeta(data: {oldId:"8991",metaType:"",metaName:"s3Info",metaValue:"/uploads/2015/03/13-Big-Brother.mp3",metaDeleted:false,file:{connect:{oldId:"1361"}}}) { id } } `
    
MUTATIONS[293] = `mutation mutation293 { createFileMeta(data: {oldId:"9001",metaType:"",metaName:"fileMetadata",metaValue:"a%3A23%3A%7Bs%3A10%3A%5C%22dataformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22channels%5C%22%3Bi%3A2%3Bs%3A11%3A%5C%22sample_rate%5C%22%3Bi%3A44100%3Bs%3A7%3A%5C%22bitrate%5C%22%3Bi%3A320000%3Bs%3A11%3A%5C%22channelmode%5C%22%3Bs%3A6%3A%5C%22stereo%5C%22%3Bs%3A12%3A%5C%22bitrate_mode%5C%22%3Bs%3A3%3A%5C%22cbr%5C%22%3Bs%3A8%3A%5C%22lossless%5C%22%3Bb%3A0%3Bs%3A15%3A%5C%22encoder_options%5C%22%3Bs%3A6%3A%5C%22CBR320%5C%22%3Bs%3A17%3A%5C%22compression_ratio%5C%22%3Bd%3A0.22675736961451248%3Bs%3A10%3A%5C%22fileformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22filesize%5C%22%3Bi%3A11583405%3Bs%3A9%3A%5C%22mime_type%5C%22%3Bs%3A10%3A%5C%22audio/mpeg%5C%22%3Bs%3A6%3A%5C%22length%5C%22%3Bi%3A287%3Bs%3A16%3A%5C%22length_formatted%5C%22%3Bs%3A4%3A%5C%224%3A47%5C%22%3Bs%3A4%3A%5C%22band%5C%22%3Bs%3A10%3A%5C%22Kanye%20West%5C%22%3Bs%3A6%3A%5C%22artist%5C%22%3Bs%3A10%3A%5C%22Kanye%20West%5C%22%3Bs%3A5%3A%5C%22title%5C%22%3Bs%3A11%3A%5C%22Big%20Brother%5C%22%3Bs%3A5%3A%5C%22album%5C%22%3Bs%3A10%3A%5C%22Graduation%5C%22%3Bs%3A4%3A%5C%22year%5C%22%3Bs%3A4%3A%5C%222007%5C%22%3Bs%3A12%3A%5C%22track_number%5C%22%3Bs%3A2%3A%5C%2213%5C%22%3Bs%3A5%3A%5C%22genre%5C%22%3Bs%3A7%3A%5C%22Hip-Hop%5C%22%3Bs%3A16%3A%5C%22encoder_settings%5C%22%3Bs%3A10%3A%5C%22FLAC%201.2.1%5C%22%3Bs%3A5%3A%5C%22image%5C%22%3Ba%3A3%3A%7Bs%3A4%3A%5C%22mime%5C%22%3Bs%3A10%3A%5C%22image/jpeg%5C%22%3Bs%3A5%3A%5C%22width%5C%22%3Bi%3A300%3Bs%3A6%3A%5C%22height%5C%22%3Bi%3A300%3B%7D%7D",metaDeleted:false,file:{connect:{oldId:"1361"}}}) { id } } `
    
MUTATIONS[294] = `mutation mutation294 { createFileMeta(data: {oldId:"9011",metaType:"",metaName:"attachedFile",metaValue:"2014/12/graduation.jpg",metaDeleted:false,file:{connect:{oldId:"1371"}}}) { id } } `
    
MUTATIONS[295] = `mutation mutation295 { createFileMeta(data: {oldId:"9021",metaType:"",metaName:"s3Info",metaValue:"/uploads/2014/12/graduation.jpg",metaDeleted:false,file:{connect:{oldId:"1371"}}}) { id } } `
    
MUTATIONS[296] = `mutation mutation296 { createFileMeta(data: {oldId:"9031",metaType:"",metaName:"fileMetadata",metaValue:"a%3A4%3A%7Bs%3A5%3A%5C%22width%5C%22%3Bi%3A736%3Bs%3A6%3A%5C%22height%5C%22%3Bi%3A736%3Bs%3A4%3A%5C%22file%5C%22%3Bs%3A22%3A%5C%222014/12/graduation.jpg%5C%22%3Bs%3A10%3A%5C%22image_meta%5C%22%3Ba%3A11%3A%7Bs%3A8%3A%5C%22aperture%5C%22%3Bi%3A0%3Bs%3A6%3A%5C%22credit%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A6%3A%5C%22camera%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A7%3A%5C%22caption%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A17%3A%5C%22created_timestamp%5C%22%3Bi%3A0%3Bs%3A9%3A%5C%22copyright%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A12%3A%5C%22focal_length%5C%22%3Bi%3A0%3Bs%3A3%3A%5C%22iso%5C%22%3Bi%3A0%3Bs%3A13%3A%5C%22shutter_speed%5C%22%3Bi%3A0%3Bs%3A5%3A%5C%22title%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A11%3A%5C%22orientation%5C%22%3Bi%3A0%3B%7D%7D",metaDeleted:false,file:{connect:{oldId:"1371"}}}) { id } } `
    
MUTATIONS[297] = `mutation mutation297 { createReviewMeta(data: {oldId:"9281",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"1401"}}}) { id } } `
    
MUTATIONS[298] = `mutation mutation298 { createReviewMeta(data: {oldId:"9291",metaType:"",metaName:"preAuthorId",metaValue:"421",metaDeleted:false,review:{connect:{oldId:"1401"}}}) { id } } `
    
MUTATIONS[299] = `mutation mutation299 { createReviewMeta(data: {oldId:"9301",metaType:"",metaName:"questionType3",metaValue:"mult_choice",metaDeleted:false,review:{connect:{oldId:"1401"}}}) { id } } `
    
MUTATIONS[300] = `mutation mutation300 { createReviewMeta(data: {oldId:"9311",metaType:"",metaName:"questionAnswer3",metaValue:"1",metaDeleted:false,review:{connect:{oldId:"1401"}}}) { id } } `
    
MUTATIONS[301] = `mutation mutation301 { createReviewMeta(data: {oldId:"9321",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1401"}}}) { id } } `
    
MUTATIONS[302] = `mutation mutation302 { createReviewMeta(data: {oldId:"9331",metaType:"",metaName:"questionAnswer2",metaValue:"7",metaDeleted:false,review:{connect:{oldId:"1401"}}}) { id } } `
    
MUTATIONS[303] = `mutation mutation303 { createReviewMeta(data: {oldId:"9341",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1401"}}}) { id } } `
    
MUTATIONS[304] = `mutation mutation304 { createReviewMeta(data: {oldId:"9351",metaType:"",metaName:"questionAnswer1",metaValue:"not%20really..think%20he%20is%20expressing%20the%20effects%20of%20being%20so%20well%20known%20and%20figuring%20it%20does%20not%20matter%20cuz%20money%21",metaDeleted:false,review:{connect:{oldId:"1401"}}}) { id } } `
    
MUTATIONS[305] = `mutation mutation305 { createReviewMeta(data: {oldId:"9361",metaType:"",metaName:"assignmentId",metaValue:"3KYQYYSHYV7MVCBUFJ3BZIQL2I6DOA",metaDeleted:false,review:{connect:{oldId:"1401"}}}) { id } } `
    
MUTATIONS[306] = `mutation mutation306 { createReviewMeta(data: {oldId:"9371",metaType:"",metaName:"hitId",metaValue:"3EHIMLB7F7ZXZGWM4WS35XK00GTH8J",metaDeleted:false,review:{connect:{oldId:"1401"}}}) { id } } `
    
MUTATIONS[307] = `mutation mutation307 { createReviewMeta(data: {oldId:"9381",metaType:"",metaName:"workerId",metaValue:"A108WCX8VOPEW7",metaDeleted:false,review:{connect:{oldId:"1401"}}}) { id } } `
    
MUTATIONS[308] = `mutation mutation308 { createFileMeta(data: {oldId:"9391",metaType:"",metaName:"attachedFile",metaValue:"2014/12/IMG_20150204_114724.jpg",metaDeleted:false,file:{connect:{oldId:"1411"}}}) { id } } `
    
MUTATIONS[309] = `mutation mutation309 { createFileMeta(data: {oldId:"9401",metaType:"",metaName:"s3Info",metaValue:"/uploads/2014/12/IMG_20150204_114724.jpg",metaDeleted:false,file:{connect:{oldId:"1411"}}}) { id } } `
    
MUTATIONS[310] = `mutation mutation310 { createFileMeta(data: {oldId:"9411",metaType:"",metaName:"fileMetadata",metaValue:"a%3A4%3A%7Bs%3A5%3A%5C%22width%5C%22%3Bi%3A3264%3Bs%3A6%3A%5C%22height%5C%22%3Bi%3A2448%3Bs%3A4%3A%5C%22file%5C%22%3Bs%3A31%3A%5C%222014/12/IMG_20150204_114724.jpg%5C%22%3Bs%3A10%3A%5C%22image_meta%5C%22%3Ba%3A11%3A%7Bs%3A8%3A%5C%22aperture%5C%22%3Bi%3A0%3Bs%3A6%3A%5C%22credit%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A6%3A%5C%22camera%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A7%3A%5C%22caption%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A17%3A%5C%22created_timestamp%5C%22%3Bi%3A0%3Bs%3A9%3A%5C%22copyright%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A12%3A%5C%22focal_length%5C%22%3Bi%3A0%3Bs%3A3%3A%5C%22iso%5C%22%3Bi%3A0%3Bs%3A13%3A%5C%22shutter_speed%5C%22%3Bi%3A0%3Bs%3A5%3A%5C%22title%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A11%3A%5C%22orientation%5C%22%3Bi%3A0%3B%7D%7D",metaDeleted:false,file:{connect:{oldId:"1411"}}}) { id } } `
    
MUTATIONS[311] = `mutation mutation311 { createReviewMeta(data: {oldId:"9421",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"1431"}}}) { id } } `
    
MUTATIONS[312] = `mutation mutation312 { createReviewMeta(data: {oldId:"9431",metaType:"",metaName:"preAuthorId",metaValue:"441",metaDeleted:false,review:{connect:{oldId:"1431"}}}) { id } } `
    
MUTATIONS[313] = `mutation mutation313 { createReviewMeta(data: {oldId:"9441",metaType:"",metaName:"preTrackId",metaValue:"851",metaDeleted:false,review:{connect:{oldId:"1451"}}}) { id } } `
    
MUTATIONS[314] = `mutation mutation314 { createReviewMeta(data: {oldId:"9451",metaType:"",metaName:"preAuthorId",metaValue:"451",metaDeleted:false,review:{connect:{oldId:"1451"}}}) { id } } `
    
MUTATIONS[315] = `mutation mutation315 { createReviewMeta(data: {oldId:"9461",metaType:"",metaName:"preTrackId",metaValue:"1381",metaDeleted:false,review:{connect:{oldId:"1461"}}}) { id } } `
    
MUTATIONS[316] = `mutation mutation316 { createReviewMeta(data: {oldId:"9471",metaType:"",metaName:"preAuthorId",metaValue:"451",metaDeleted:false,review:{connect:{oldId:"1461"}}}) { id } } `
    
MUTATIONS[317] = `mutation mutation317 { createReviewMeta(data: {oldId:"9481",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1461"}}}) { id } } `
    
MUTATIONS[318] = `mutation mutation318 { createReviewMeta(data: {oldId:"9491",metaType:"",metaName:"questionAnswer2",metaValue:"4",metaDeleted:false,review:{connect:{oldId:"1461"}}}) { id } } `
    
MUTATIONS[319] = `mutation mutation319 { createReviewMeta(data: {oldId:"9501",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1461"}}}) { id } } `
    
MUTATIONS[320] = `mutation mutation320 { createReviewMeta(data: {oldId:"9511",metaType:"",metaName:"questionAnswer1",metaValue:"share..%20happy%20enjoyable%20to%20convey..................................................................................",metaDeleted:false,review:{connect:{oldId:"1461"}}}) { id } } `
    
MUTATIONS[321] = `mutation mutation321 { createReviewMeta(data: {oldId:"9531",metaType:"",metaName:"assignmentId",metaValue:"39KFRKBFINVPTN6LBFQPC30MK6CYO3",metaDeleted:false,review:{connect:{oldId:"1461"}}}) { id } } `
    
MUTATIONS[322] = `mutation mutation322 { createReviewMeta(data: {oldId:"9541",metaType:"",metaName:"hitId",metaValue:"3EHIMLB7F7ZXZGWM4WS35XK00GTH8J",metaDeleted:false,review:{connect:{oldId:"1461"}}}) { id } } `
    
MUTATIONS[323] = `mutation mutation323 { createReviewMeta(data: {oldId:"9551",metaType:"",metaName:"workerId",metaValue:"AGY2PTZLZFT2L",metaDeleted:false,review:{connect:{oldId:"1461"}}}) { id } } `
    
MUTATIONS[324] = `mutation mutation324 { createReviewMeta(data: {oldId:"9561",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"1481"}}}) { id } } `
    
MUTATIONS[325] = `mutation mutation325 { createReviewMeta(data: {oldId:"9571",metaType:"",metaName:"preAuthorId",metaValue:"471",metaDeleted:false,review:{connect:{oldId:"1481"}}}) { id } } `
    
MUTATIONS[326] = `mutation mutation326 { createReviewMeta(data: {oldId:"9581",metaType:"",metaName:"questionType3",metaValue:"mult_choice",metaDeleted:false,review:{connect:{oldId:"1481"}}}) { id } } `
    
MUTATIONS[327] = `mutation mutation327 { createReviewMeta(data: {oldId:"9591",metaType:"",metaName:"questionAnswer3",metaValue:"1",metaDeleted:false,review:{connect:{oldId:"1481"}}}) { id } } `
    
MUTATIONS[328] = `mutation mutation328 { createReviewMeta(data: {oldId:"9601",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1481"}}}) { id } } `
    
MUTATIONS[329] = `mutation mutation329 { createReviewMeta(data: {oldId:"9611",metaType:"",metaName:"questionAnswer2",metaValue:"5",metaDeleted:false,review:{connect:{oldId:"1481"}}}) { id } } `
    
MUTATIONS[330] = `mutation mutation330 { createReviewMeta(data: {oldId:"9621",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1481"}}}) { id } } `
    
MUTATIONS[331] = `mutation mutation331 { createReviewMeta(data: {oldId:"9631",metaType:"",metaName:"questionAnswer1",metaValue:"Sort%20of.%20It%20seems%20like%20he%20is%20trying%20to%20prove%20his%20superiority%20to%20other%20people%2C%20but%20there%27s%20also%20something%20he%20doesn%27t%20feel%20good%20about.",metaDeleted:false,review:{connect:{oldId:"1481"}}}) { id } } `
    
MUTATIONS[332] = `mutation mutation332 { createReviewMeta(data: {oldId:"9641",metaType:"",metaName:"assignmentId",metaValue:"3QBD8R3Z21J9VGS1M82IWEWFP5G4OR",metaDeleted:false,review:{connect:{oldId:"1481"}}}) { id } } `
    
MUTATIONS[333] = `mutation mutation333 { createReviewMeta(data: {oldId:"9651",metaType:"",metaName:"hitId",metaValue:"3EHIMLB7F7ZXZGWM4WS35XK00GTH8J",metaDeleted:false,review:{connect:{oldId:"1481"}}}) { id } } `
    
MUTATIONS[334] = `mutation mutation334 { createReviewMeta(data: {oldId:"9661",metaType:"",metaName:"workerId",metaValue:"A2S1BEE53WY5IX",metaDeleted:false,review:{connect:{oldId:"1481"}}}) { id } } `
    
MUTATIONS[335] = `mutation mutation335 { createReviewMeta(data: {oldId:"9671",metaType:"",metaName:"preTrackId",metaValue:"1381",metaDeleted:false,review:{connect:{oldId:"1491"}}}) { id } } `
    
MUTATIONS[336] = `mutation mutation336 { createReviewMeta(data: {oldId:"9681",metaType:"",metaName:"preAuthorId",metaValue:"471",metaDeleted:false,review:{connect:{oldId:"1491"}}}) { id } } `
    
MUTATIONS[337] = `mutation mutation337 { createReviewMeta(data: {oldId:"9691",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1491"}}}) { id } } `
    
MUTATIONS[338] = `mutation mutation338 { createReviewMeta(data: {oldId:"9701",metaType:"",metaName:"questionAnswer2",metaValue:"5",metaDeleted:false,review:{connect:{oldId:"1491"}}}) { id } } `
    
MUTATIONS[339] = `mutation mutation339 { createReviewMeta(data: {oldId:"9711",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1491"}}}) { id } } `
    
MUTATIONS[340] = `mutation mutation340 { createReviewMeta(data: {oldId:"9721",metaType:"",metaName:"questionAnswer1",metaValue:"I%20think%20he%27s%20trying%20to%20show%20that%20fame%20isn%27t%20everything.%20It%27s%20good%20to%20be%20popular%2C%20but%20not%20if%20you%20let%20it%20change%20you%20into%20someone%20who%20forgets%20where%20he%20came%20from%20and/or%20starts%20acting%20like%20a%20jerk.",metaDeleted:false,review:{connect:{oldId:"1491"}}}) { id } } `
    
MUTATIONS[341] = `mutation mutation341 { createReviewMeta(data: {oldId:"9741",metaType:"",metaName:"assignmentId",metaValue:"32ZKVD547FN4UQKOIPSDGP4A4623B2",metaDeleted:false,review:{connect:{oldId:"1491"}}}) { id } } `
    
MUTATIONS[342] = `mutation mutation342 { createReviewMeta(data: {oldId:"9751",metaType:"",metaName:"hitId",metaValue:"356TQKY9XFX06RQARN6REKV6MCG78O",metaDeleted:false,review:{connect:{oldId:"1491"}}}) { id } } `
    
MUTATIONS[343] = `mutation mutation343 { createReviewMeta(data: {oldId:"9761",metaType:"",metaName:"workerId",metaValue:"A2S1BEE53WY5IX",metaDeleted:false,review:{connect:{oldId:"1491"}}}) { id } } `
    
MUTATIONS[344] = `mutation mutation344 { createReviewMeta(data: {oldId:"9771",metaType:"",metaName:"preTrackId",metaValue:"1381",metaDeleted:false,review:{connect:{oldId:"1511"}}}) { id } } `
    
MUTATIONS[345] = `mutation mutation345 { createReviewMeta(data: {oldId:"9781",metaType:"",metaName:"preAuthorId",metaValue:"491",metaDeleted:false,review:{connect:{oldId:"1511"}}}) { id } } `
    
MUTATIONS[346] = `mutation mutation346 { createReviewMeta(data: {oldId:"9791",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1511"}}}) { id } } `
    
MUTATIONS[347] = `mutation mutation347 { createReviewMeta(data: {oldId:"9801",metaType:"",metaName:"questionAnswer2",metaValue:"6",metaDeleted:false,review:{connect:{oldId:"1511"}}}) { id } } `
    
MUTATIONS[348] = `mutation mutation348 { createReviewMeta(data: {oldId:"9811",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1511"}}}) { id } } `
    
MUTATIONS[349] = `mutation mutation349 { createReviewMeta(data: {oldId:"9821",metaType:"",metaName:"questionAnswer1",metaValue:"He%20is%20talking%20about%20the%20benefits%20of%20a%20big%20brother.%20%20The%20song%20goes%20into%20how%20the%20big%20brother%20provided%20opportunities.",metaDeleted:false,review:{connect:{oldId:"1511"}}}) { id } } `
    
MUTATIONS[350] = `mutation mutation350 { createReviewMeta(data: {oldId:"9841",metaType:"",metaName:"assignmentId",metaValue:"3LRLIPTPEQ957EN3XHKG2016XA5KA1",metaDeleted:false,review:{connect:{oldId:"1511"}}}) { id } } `
    
MUTATIONS[351] = `mutation mutation351 { createReviewMeta(data: {oldId:"9851",metaType:"",metaName:"hitId",metaValue:"3EHIMLB7F7ZXZGWM4WS35XK00GTH8J",metaDeleted:false,review:{connect:{oldId:"1511"}}}) { id } } `
    
MUTATIONS[352] = `mutation mutation352 { createReviewMeta(data: {oldId:"9861",metaType:"",metaName:"workerId",metaValue:"A27TGIUBL2WKSV",metaDeleted:false,review:{connect:{oldId:"1511"}}}) { id } } `
    
MUTATIONS[353] = `mutation mutation353 { createReviewMeta(data: {oldId:"9871",metaType:"",metaName:"preTrackId",metaValue:"1381",metaDeleted:false,review:{connect:{oldId:"1531"}}}) { id } } `
    
MUTATIONS[354] = `mutation mutation354 { createReviewMeta(data: {oldId:"9881",metaType:"",metaName:"preAuthorId",metaValue:"501",metaDeleted:false,review:{connect:{oldId:"1531"}}}) { id } } `
    
MUTATIONS[355] = `mutation mutation355 { createReviewMeta(data: {oldId:"9891",metaType:"",metaName:"preTrackId",metaValue:"1381",metaDeleted:false,review:{connect:{oldId:"1551"}}}) { id } } `
    
MUTATIONS[356] = `mutation mutation356 { createReviewMeta(data: {oldId:"9901",metaType:"",metaName:"preAuthorId",metaValue:"511",metaDeleted:false,review:{connect:{oldId:"1551"}}}) { id } } `
    
MUTATIONS[357] = `mutation mutation357 { createFileMeta(data: {oldId:"9911",metaType:"",metaName:"attachedFile",metaValue:"2014/12/11-The-Glory.mp3",metaDeleted:false,file:{connect:{oldId:"1561"}}}) { id } } `
    
MUTATIONS[358] = `mutation mutation358 { createFileMeta(data: {oldId:"9921",metaType:"",metaName:"thumbnailId",metaValue:"381",metaDeleted:false,file:{connect:{oldId:"1561"}}}) { id } } `
    
MUTATIONS[359] = `mutation mutation359 { createFileMeta(data: {oldId:"9931",metaType:"",metaName:"s3Info",metaValue:"/uploads/2015/03/11-The-Glory.mp3",metaDeleted:false,file:{connect:{oldId:"1561"}}}) { id } } `
    
MUTATIONS[360] = `mutation mutation360 { createFileMeta(data: {oldId:"9941",metaType:"",metaName:"fileMetadata",metaValue:"a%3A23%3A%7Bs%3A10%3A%5C%22dataformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22channels%5C%22%3Bi%3A2%3Bs%3A11%3A%5C%22sample_rate%5C%22%3Bi%3A44100%3Bs%3A7%3A%5C%22bitrate%5C%22%3Bi%3A320000%3Bs%3A11%3A%5C%22channelmode%5C%22%3Bs%3A6%3A%5C%22stereo%5C%22%3Bs%3A12%3A%5C%22bitrate_mode%5C%22%3Bs%3A3%3A%5C%22cbr%5C%22%3Bs%3A8%3A%5C%22lossless%5C%22%3Bb%3A0%3Bs%3A15%3A%5C%22encoder_options%5C%22%3Bs%3A6%3A%5C%22CBR320%5C%22%3Bs%3A17%3A%5C%22compression_ratio%5C%22%3Bd%3A0.22675736961451248%3Bs%3A10%3A%5C%22fileformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22filesize%5C%22%3Bi%3A8600219%3Bs%3A9%3A%5C%22mime_type%5C%22%3Bs%3A10%3A%5C%22audio/mpeg%5C%22%3Bs%3A6%3A%5C%22length%5C%22%3Bi%3A213%3Bs%3A16%3A%5C%22length_formatted%5C%22%3Bs%3A4%3A%5C%223%3A33%5C%22%3Bs%3A4%3A%5C%22band%5C%22%3Bs%3A10%3A%5C%22Kanye%20West%5C%22%3Bs%3A6%3A%5C%22artist%5C%22%3Bs%3A10%3A%5C%22Kanye%20West%5C%22%3Bs%3A5%3A%5C%22title%5C%22%3Bs%3A9%3A%5C%22The%20Glory%5C%22%3Bs%3A5%3A%5C%22album%5C%22%3Bs%3A10%3A%5C%22Graduation%5C%22%3Bs%3A4%3A%5C%22year%5C%22%3Bs%3A4%3A%5C%222007%5C%22%3Bs%3A12%3A%5C%22track_number%5C%22%3Bs%3A2%3A%5C%2211%5C%22%3Bs%3A5%3A%5C%22genre%5C%22%3Bs%3A7%3A%5C%22Hip-Hop%5C%22%3Bs%3A16%3A%5C%22encoder_settings%5C%22%3Bs%3A10%3A%5C%22FLAC%201.2.1%5C%22%3Bs%3A5%3A%5C%22image%5C%22%3Ba%3A3%3A%7Bs%3A4%3A%5C%22mime%5C%22%3Bs%3A10%3A%5C%22image/jpeg%5C%22%3Bs%3A5%3A%5C%22width%5C%22%3Bi%3A300%3Bs%3A6%3A%5C%22height%5C%22%3Bi%3A300%3B%7D%7D",metaDeleted:false,file:{connect:{oldId:"1561"}}}) { id } } `
    
MUTATIONS[361] = `mutation mutation361 { createFileMeta(data: {oldId:"9951",metaType:"",metaName:"attachedFile",metaValue:"2014/12/graduation.jpg",metaDeleted:false,file:{connect:{oldId:"1571"}}}) { id } } `
    
MUTATIONS[362] = `mutation mutation362 { createFileMeta(data: {oldId:"9961",metaType:"",metaName:"s3Info",metaValue:"/uploads/2014/12/graduation.jpg",metaDeleted:false,file:{connect:{oldId:"1571"}}}) { id } } `
    
MUTATIONS[363] = `mutation mutation363 { createFileMeta(data: {oldId:"9971",metaType:"",metaName:"fileMetadata",metaValue:"a%3A4%3A%7Bs%3A5%3A%5C%22width%5C%22%3Bi%3A736%3Bs%3A6%3A%5C%22height%5C%22%3Bi%3A736%3Bs%3A4%3A%5C%22file%5C%22%3Bs%3A22%3A%5C%222014/12/graduation.jpg%5C%22%3Bs%3A10%3A%5C%22image_meta%5C%22%3Ba%3A11%3A%7Bs%3A8%3A%5C%22aperture%5C%22%3Bi%3A0%3Bs%3A6%3A%5C%22credit%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A6%3A%5C%22camera%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A7%3A%5C%22caption%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A17%3A%5C%22created_timestamp%5C%22%3Bi%3A0%3Bs%3A9%3A%5C%22copyright%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A12%3A%5C%22focal_length%5C%22%3Bi%3A0%3Bs%3A3%3A%5C%22iso%5C%22%3Bi%3A0%3Bs%3A13%3A%5C%22shutter_speed%5C%22%3Bi%3A0%3Bs%3A5%3A%5C%22title%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A11%3A%5C%22orientation%5C%22%3Bi%3A0%3B%7D%7D",metaDeleted:false,file:{connect:{oldId:"1571"}}}) { id } } `
    
MUTATIONS[364] = `mutation mutation364 { createReviewMeta(data: {oldId:"10221",metaType:"",metaName:"preTrackId",metaValue:"851",metaDeleted:false,review:{connect:{oldId:"1601"}}}) { id } } `
    
MUTATIONS[365] = `mutation mutation365 { createReviewMeta(data: {oldId:"10231",metaType:"",metaName:"preAuthorId",metaValue:"551",metaDeleted:false,review:{connect:{oldId:"1601"}}}) { id } } `
    
MUTATIONS[366] = `mutation mutation366 { createReviewMeta(data: {oldId:"10241",metaType:"",metaName:"questionType2",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1601"}}}) { id } } `
    
MUTATIONS[367] = `mutation mutation367 { createReviewMeta(data: {oldId:"10251",metaType:"",metaName:"questionAnswer2",metaValue:"I%20like%20the%20sound%20the%20best%2C%20until%20the%20rapping%20starts..%20The%20lyrics%20are%20ok..%20The%20production%20was%20good.%20I%20just%20do%20not%20like%20rap",metaDeleted:false,review:{connect:{oldId:"1601"}}}) { id } } `
    
MUTATIONS[368] = `mutation mutation368 { createReviewMeta(data: {oldId:"10261",metaType:"",metaName:"questionType1",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1601"}}}) { id } } `
    
MUTATIONS[369] = `mutation mutation369 { createReviewMeta(data: {oldId:"10271",metaType:"",metaName:"questionAnswer1",metaValue:"6",metaDeleted:false,review:{connect:{oldId:"1601"}}}) { id } } `
    
MUTATIONS[370] = `mutation mutation370 { createReviewMeta(data: {oldId:"10291",metaType:"",metaName:"assignmentId",metaValue:"3VFJCI1K4ZZS49D191LNZYYNQXNGRD",metaDeleted:false,review:{connect:{oldId:"1601"}}}) { id } } `
    
MUTATIONS[371] = `mutation mutation371 { createReviewMeta(data: {oldId:"10301",metaType:"",metaName:"hitId",metaValue:"356TQKY9XFX06RQARN6REKV6MCG78O",metaDeleted:false,review:{connect:{oldId:"1601"}}}) { id } } `
    
MUTATIONS[372] = `mutation mutation372 { createReviewMeta(data: {oldId:"10311",metaType:"",metaName:"workerId",metaValue:"A3P7F75ENT91OH",metaDeleted:false,review:{connect:{oldId:"1601"}}}) { id } } `
    
MUTATIONS[373] = `mutation mutation373 { createReviewMeta(data: {oldId:"10321",metaType:"",metaName:"preTrackId",metaValue:"1381",metaDeleted:false,review:{connect:{oldId:"1631"}}}) { id } } `
    
MUTATIONS[374] = `mutation mutation374 { createReviewMeta(data: {oldId:"10331",metaType:"",metaName:"preAuthorId",metaValue:"561",metaDeleted:false,review:{connect:{oldId:"1631"}}}) { id } } `
    
MUTATIONS[375] = `mutation mutation375 { createReviewMeta(data: {oldId:"10341",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1631"}}}) { id } } `
    
MUTATIONS[376] = `mutation mutation376 { createReviewMeta(data: {oldId:"10351",metaType:"",metaName:"questionAnswer2",metaValue:"10",metaDeleted:false,review:{connect:{oldId:"1631"}}}) { id } } `
    
MUTATIONS[377] = `mutation mutation377 { createReviewMeta(data: {oldId:"10361",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1631"}}}) { id } } `
    
MUTATIONS[378] = `mutation mutation378 { createReviewMeta(data: {oldId:"10371",metaType:"",metaName:"questionAnswer1",metaValue:"kanye%20is%20trying%20to%20show%20his%20fans%20through%20his%20song%20about%20his%20big%20brother%20%20jay%20who%20is%20so%20shy.%20he%20told%20jay%20that%20he%20had%20a%20song...he%20said%20his%20big%20brother%20is%20a%20big%20brother.his%20big%20brother%20used%20to%20be%20no%20friends",metaDeleted:false,review:{connect:{oldId:"1631"}}}) { id } } `
    
MUTATIONS[379] = `mutation mutation379 { createReviewMeta(data: {oldId:"10401",metaType:"",metaName:"assignmentId",metaValue:"3TY7ZAOG5FK961PL5FNNDUPTOO5K0M",metaDeleted:false,review:{connect:{oldId:"1631"}}}) { id } } `
    
MUTATIONS[380] = `mutation mutation380 { createReviewMeta(data: {oldId:"10411",metaType:"",metaName:"hitId",metaValue:"356TQKY9XFX06RQARN6REKV6MCG78O",metaDeleted:false,review:{connect:{oldId:"1631"}}}) { id } } `
    
MUTATIONS[381] = `mutation mutation381 { createReviewMeta(data: {oldId:"10421",metaType:"",metaName:"workerId",metaValue:"A1IBZC62E9DNGP",metaDeleted:false,review:{connect:{oldId:"1631"}}}) { id } } `
    
MUTATIONS[382] = `mutation mutation382 { createReviewMeta(data: {oldId:"10431",metaType:"",metaName:"preTrackId",metaValue:"1381",metaDeleted:false,review:{connect:{oldId:"1641"}}}) { id } } `
    
MUTATIONS[383] = `mutation mutation383 { createReviewMeta(data: {oldId:"10441",metaType:"",metaName:"preAuthorId",metaValue:"121",metaDeleted:false,review:{connect:{oldId:"1641"}}}) { id } } `
    
MUTATIONS[384] = `mutation mutation384 { createReviewMeta(data: {oldId:"10451",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1641"}}}) { id } } `
    
MUTATIONS[385] = `mutation mutation385 { createReviewMeta(data: {oldId:"10461",metaType:"",metaName:"questionAnswer2",metaValue:"7",metaDeleted:false,review:{connect:{oldId:"1641"}}}) { id } } `
    
MUTATIONS[386] = `mutation mutation386 { createReviewMeta(data: {oldId:"10471",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1641"}}}) { id } } `
    
MUTATIONS[387] = `mutation mutation387 { createReviewMeta(data: {oldId:"10481",metaType:"",metaName:"questionAnswer1",metaValue:"He%27s%20showing%20his%20connection%20to%20Jay-Z%20%28he%20mention%27s%20Notorious%20B.I.G.%20but%20talks%20about%20Jay-Z%20several%20times%20throughout%20the%20song%29.%20I%20think%20he%20is%20trying%20to%20show%20his%20connection%20to%20the%20hip-hop/rap%20past%2C%20his%20own%20humble%20beginnings%20and%20how%20he%20carries%20over%20the%20work%20done%20by%20his%20predecessors.%20",metaDeleted:false,review:{connect:{oldId:"1641"}}}) { id } } `
    
MUTATIONS[388] = `mutation mutation388 { createReviewMeta(data: {oldId:"10511",metaType:"",metaName:"assignmentId",metaValue:"3L70J4KAZGMXT8HT50YTYN6GD1MDAV",metaDeleted:false,review:{connect:{oldId:"1641"}}}) { id } } `
    
MUTATIONS[389] = `mutation mutation389 { createReviewMeta(data: {oldId:"10521",metaType:"",metaName:"hitId",metaValue:"32K26U12DNOEYCNXQTKN6QPAJMEDVO",metaDeleted:false,review:{connect:{oldId:"1641"}}}) { id } } `
    
MUTATIONS[390] = `mutation mutation390 { createReviewMeta(data: {oldId:"10531",metaType:"",metaName:"workerId",metaValue:"A2ZWOPNOG2A5PX",metaDeleted:false,review:{connect:{oldId:"1641"}}}) { id } } `
    
MUTATIONS[391] = `mutation mutation391 { createReviewMeta(data: {oldId:"10541",metaType:"",metaName:"preTrackId",metaValue:"1381",metaDeleted:false,review:{connect:{oldId:"1651"}}}) { id } } `
    
MUTATIONS[392] = `mutation mutation392 { createReviewMeta(data: {oldId:"10551",metaType:"",metaName:"preAuthorId",metaValue:"341",metaDeleted:false,review:{connect:{oldId:"1651"}}}) { id } } `
    
MUTATIONS[393] = `mutation mutation393 { createReviewMeta(data: {oldId:"10561",metaType:"",metaName:"preTrackId",metaValue:"1381",metaDeleted:false,review:{connect:{oldId:"1671"}}}) { id } } `
    
MUTATIONS[394] = `mutation mutation394 { createReviewMeta(data: {oldId:"10571",metaType:"",metaName:"preAuthorId",metaValue:"581",metaDeleted:false,review:{connect:{oldId:"1671"}}}) { id } } `
    
MUTATIONS[395] = `mutation mutation395 { createReviewMeta(data: {oldId:"10581",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1651"}}}) { id } } `
    
MUTATIONS[396] = `mutation mutation396 { createReviewMeta(data: {oldId:"10591",metaType:"",metaName:"questionAnswer2",metaValue:"9",metaDeleted:false,review:{connect:{oldId:"1651"}}}) { id } } `
    
MUTATIONS[397] = `mutation mutation397 { createReviewMeta(data: {oldId:"10601",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1651"}}}) { id } } `
    
MUTATIONS[398] = `mutation mutation398 { createReviewMeta(data: {oldId:"10611",metaType:"",metaName:"questionAnswer1",metaValue:"That%20Jay%20Z%20is%20like%20his%20brother%20and%20that%20he%20helped%20him%20with%20his%20career%2C%20and%20watched%20he%20to%20protect%20him%20over%20his%20career.%20And%2C%20a%20song%20to%20show%20his%20appreciation%20for%20what%20Jay%20Z%20has%20done%20for%20him.%20",metaDeleted:false,review:{connect:{oldId:"1651"}}}) { id } } `
    
MUTATIONS[399] = `mutation mutation399 { createReviewMeta(data: {oldId:"10641",metaType:"",metaName:"assignmentId",metaValue:"3JZQSN0I3QAV1J8SI6LTI9K4N9HFGM",metaDeleted:false,review:{connect:{oldId:"1651"}}}) { id } } `
    
MUTATIONS[400] = `mutation mutation400 { createReviewMeta(data: {oldId:"10651",metaType:"",metaName:"hitId",metaValue:"32K26U12DNOEYCNXQTKN6QPAJMEDVO",metaDeleted:false,review:{connect:{oldId:"1651"}}}) { id } } `
    
MUTATIONS[401] = `mutation mutation401 { createReviewMeta(data: {oldId:"10661",metaType:"",metaName:"workerId",metaValue:"A3RJF3M0VJB8XW",metaDeleted:false,review:{connect:{oldId:"1651"}}}) { id } } `
    
MUTATIONS[402] = `mutation mutation402 { createReviewMeta(data: {oldId:"10671",metaType:"",metaName:"preTrackId",metaValue:"851",metaDeleted:false,review:{connect:{oldId:"1691"}}}) { id } } `
    
MUTATIONS[403] = `mutation mutation403 { createReviewMeta(data: {oldId:"10681",metaType:"",metaName:"preAuthorId",metaValue:"591",metaDeleted:false,review:{connect:{oldId:"1691"}}}) { id } } `
    
MUTATIONS[404] = `mutation mutation404 { createReviewMeta(data: {oldId:"10691",metaType:"",metaName:"questionType2",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1691"}}}) { id } } `
    
MUTATIONS[405] = `mutation mutation405 { createReviewMeta(data: {oldId:"10701",metaType:"",metaName:"questionAnswer2",metaValue:"The%20production%20is%20very%20good%2Cvery%20clear%20sound%2C%20nothing%20is%20muddy%2C%20the%20dynamic%20range%20is%20wide%2C%20the%20base%20is%20very%20clear.%0D%0AHowever%2C%20what%20I%20like%20most%20is%20the%20sound%20of%20his%20voice%2C%20when%20singing%2C%20very%20soothing%20and%20melodic.%20His%20voice%2C%20when%20rapping%2C%20is%20not%20as%20melodic.",metaDeleted:false,review:{connect:{oldId:"1691"}}}) { id } } `
    
MUTATIONS[406] = `mutation mutation406 { createReviewMeta(data: {oldId:"10711",metaType:"",metaName:"questionType1",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1691"}}}) { id } } `
    
MUTATIONS[407] = `mutation mutation407 { createReviewMeta(data: {oldId:"10721",metaType:"",metaName:"questionAnswer1",metaValue:"8",metaDeleted:false,review:{connect:{oldId:"1691"}}}) { id } } `
    
MUTATIONS[408] = `mutation mutation408 { createReviewMeta(data: {oldId:"10751",metaType:"",metaName:"assignmentId",metaValue:"3WYGZ5XF3WF97A9XEH67N0VCJGTKSE",metaDeleted:false,review:{connect:{oldId:"1691"}}}) { id } } `
    
MUTATIONS[409] = `mutation mutation409 { createReviewMeta(data: {oldId:"10761",metaType:"",metaName:"hitId",metaValue:"32K26U12DNOEYCNXQTKN6QPAJMEDVO",metaDeleted:false,review:{connect:{oldId:"1691"}}}) { id } } `
    
MUTATIONS[410] = `mutation mutation410 { createReviewMeta(data: {oldId:"10771",metaType:"",metaName:"workerId",metaValue:"AS3EZ4OOZVM3E",metaDeleted:false,review:{connect:{oldId:"1691"}}}) { id } } `
    
MUTATIONS[411] = `mutation mutation411 { createReviewMeta(data: {oldId:"10781",metaType:"",metaName:"preTrackId",metaValue:"1381",metaDeleted:false,review:{connect:{oldId:"1701"}}}) { id } } `
    
MUTATIONS[412] = `mutation mutation412 { createReviewMeta(data: {oldId:"10791",metaType:"",metaName:"preAuthorId",metaValue:"591",metaDeleted:false,review:{connect:{oldId:"1701"}}}) { id } } `
    
MUTATIONS[413] = `mutation mutation413 { createReviewMeta(data: {oldId:"10801",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1701"}}}) { id } } `
    
MUTATIONS[414] = `mutation mutation414 { createReviewMeta(data: {oldId:"10811",metaType:"",metaName:"questionAnswer2",metaValue:"8",metaDeleted:false,review:{connect:{oldId:"1701"}}}) { id } } `
    
MUTATIONS[415] = `mutation mutation415 { createReviewMeta(data: {oldId:"10821",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1701"}}}) { id } } `
    
MUTATIONS[416] = `mutation mutation416 { createReviewMeta(data: {oldId:"10831",metaType:"",metaName:"questionAnswer1",metaValue:"His%20rivalry%20with%20his%20friend%20was%20respectful%2C%20and%20he%20is%20paying%20homage%20his%20mentor%20and%20friend.%20He%20is%20sorry%20for%20some%20of%20the%20things%20he%20has%20done%20and%20is%20apologizing%20and%20admitting%20he%20has%20made%20some%20mistakes%2C%20and%20at%20the%20same%20time%2C%20he%20is%20pointing%20out%20some%20problems%20he%20had%20with%20their%20making%20moves%20that%20were%20similar%20to%20his%2C%20%28being%20copied%29",metaDeleted:false,review:{connect:{oldId:"1701"}}}) { id } } `
    
MUTATIONS[417] = `mutation mutation417 { createReviewMeta(data: {oldId:"10861",metaType:"",metaName:"assignmentId",metaValue:"3QHK8ZVMIMILAUADOVWDCBYR4SDBL8",metaDeleted:false,review:{connect:{oldId:"1701"}}}) { id } } `
    
MUTATIONS[418] = `mutation mutation418 { createReviewMeta(data: {oldId:"10871",metaType:"",metaName:"hitId",metaValue:"3EHIMLB7F7ZXZGWM4WS35XK00GTH8J",metaDeleted:false,review:{connect:{oldId:"1701"}}}) { id } } `
    
MUTATIONS[419] = `mutation mutation419 { createReviewMeta(data: {oldId:"10881",metaType:"",metaName:"workerId",metaValue:"AS3EZ4OOZVM3E",metaDeleted:false,review:{connect:{oldId:"1701"}}}) { id } } `
    
MUTATIONS[420] = `mutation mutation420 { createReviewMeta(data: {oldId:"10891",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"1711"}}}) { id } } `
    
MUTATIONS[421] = `mutation mutation421 { createReviewMeta(data: {oldId:"10901",metaType:"",metaName:"preAuthorId",metaValue:"591",metaDeleted:false,review:{connect:{oldId:"1711"}}}) { id } } `
    
MUTATIONS[422] = `mutation mutation422 { createReviewMeta(data: {oldId:"10911",metaType:"",metaName:"questionType3",metaValue:"mult_choice",metaDeleted:false,review:{connect:{oldId:"1711"}}}) { id } } `
    
MUTATIONS[423] = `mutation mutation423 { createReviewMeta(data: {oldId:"10921",metaType:"",metaName:"questionAnswer3",metaValue:"1",metaDeleted:false,review:{connect:{oldId:"1711"}}}) { id } } `
    
MUTATIONS[424] = `mutation mutation424 { createReviewMeta(data: {oldId:"10931",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1711"}}}) { id } } `
    
MUTATIONS[425] = `mutation mutation425 { createReviewMeta(data: {oldId:"10941",metaType:"",metaName:"questionAnswer2",metaValue:"1",metaDeleted:false,review:{connect:{oldId:"1711"}}}) { id } } `
    
MUTATIONS[426] = `mutation mutation426 { createReviewMeta(data: {oldId:"10951",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1711"}}}) { id } } `
    
MUTATIONS[427] = `mutation mutation427 { createReviewMeta(data: {oldId:"10961",metaType:"",metaName:"questionAnswer1",metaValue:"Kanye%20is%20saying%20that%20he%20knows%20what%20he%20is%20doing%20and%20he%20doesn%27t%20want%20to%20hear%20anyone%27s%20opinion%2C%20he%20is%20going%20to%20do%20what%20he%20thinks%20is%20correct.%20This%20may%20be%20a%20winners%20attitude%2C%20but%2C%20it%20can%20also%20be%20very%20destructive%20to%20block%20out%20everyone%20else.",metaDeleted:false,review:{connect:{oldId:"1711"}}}) { id } } `
    
MUTATIONS[428] = `mutation mutation428 { createReviewMeta(data: {oldId:"10981",metaType:"",metaName:"assignmentId",metaValue:"31JLPPHS2UUODK9XMUXZM949B663OT",metaDeleted:false,review:{connect:{oldId:"1711"}}}) { id } } `
    
MUTATIONS[429] = `mutation mutation429 { createReviewMeta(data: {oldId:"10991",metaType:"",metaName:"hitId",metaValue:"356TQKY9XFX06RQARN6REKV6MCG78O",metaDeleted:false,review:{connect:{oldId:"1711"}}}) { id } } `
    
MUTATIONS[430] = `mutation mutation430 { createReviewMeta(data: {oldId:"11001",metaType:"",metaName:"workerId",metaValue:"AS3EZ4OOZVM3E",metaDeleted:false,review:{connect:{oldId:"1711"}}}) { id } } `
    
MUTATIONS[431] = `mutation mutation431 { createReviewMeta(data: {oldId:"11011",metaType:"",metaName:"preTrackId",metaValue:"1381",metaDeleted:false,review:{connect:{oldId:"1721"}}}) { id } } `
    
MUTATIONS[432] = `mutation mutation432 { createReviewMeta(data: {oldId:"11021",metaType:"",metaName:"preAuthorId",metaValue:"521",metaDeleted:false,review:{connect:{oldId:"1721"}}}) { id } } `
    
MUTATIONS[433] = `mutation mutation433 { createReviewMeta(data: {oldId:"11031",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"1741"}}}) { id } } `
    
MUTATIONS[434] = `mutation mutation434 { createReviewMeta(data: {oldId:"11041",metaType:"",metaName:"preAuthorId",metaValue:"601",metaDeleted:false,review:{connect:{oldId:"1741"}}}) { id } } `
    
MUTATIONS[435] = `mutation mutation435 { createReviewMeta(data: {oldId:"11051",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"1761"}}}) { id } } `
    
MUTATIONS[436] = `mutation mutation436 { createReviewMeta(data: {oldId:"11061",metaType:"",metaName:"preAuthorId",metaValue:"611",metaDeleted:false,review:{connect:{oldId:"1761"}}}) { id } } `
    
MUTATIONS[437] = `mutation mutation437 { createReviewMeta(data: {oldId:"11071",metaType:"",metaName:"questionType3",metaValue:"mult_choice",metaDeleted:false,review:{connect:{oldId:"1761"}}}) { id } } `
    
MUTATIONS[438] = `mutation mutation438 { createReviewMeta(data: {oldId:"11081",metaType:"",metaName:"questionAnswer3",metaValue:"4",metaDeleted:false,review:{connect:{oldId:"1761"}}}) { id } } `
    
MUTATIONS[439] = `mutation mutation439 { createReviewMeta(data: {oldId:"11091",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1761"}}}) { id } } `
    
MUTATIONS[440] = `mutation mutation440 { createReviewMeta(data: {oldId:"11101",metaType:"",metaName:"questionAnswer2",metaValue:"10",metaDeleted:false,review:{connect:{oldId:"1761"}}}) { id } } `
    
MUTATIONS[441] = `mutation mutation441 { createReviewMeta(data: {oldId:"11111",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1761"}}}) { id } } `
    
MUTATIONS[442] = `mutation mutation442 { createReviewMeta(data: {oldId:"11121",metaType:"",metaName:"questionAnswer1",metaValue:"yes%20i%20do%20think%20Kanye%20is%20trying%20to%20express%20a%20winner%27s%20attitude%20yes%20i%20do%20think%20Kanye%20is%20trying%20to%20express%20a%20winner%27s%20attitude",metaDeleted:false,review:{connect:{oldId:"1761"}}}) { id } } `
    
MUTATIONS[443] = `mutation mutation443 { createReviewMeta(data: {oldId:"11141",metaType:"",metaName:"assignmentId",metaValue:"3IRIK4HM3AKM1EZCFRM6YCMCWHW6C8",metaDeleted:false,review:{connect:{oldId:"1761"}}}) { id } } `
    
MUTATIONS[444] = `mutation mutation444 { createReviewMeta(data: {oldId:"11151",metaType:"",metaName:"hitId",metaValue:"39N6W9XWRDNYEQSTXU8FJAW1EUZYGT",metaDeleted:false,review:{connect:{oldId:"1761"}}}) { id } } `
    
MUTATIONS[445] = `mutation mutation445 { createReviewMeta(data: {oldId:"11161",metaType:"",metaName:"workerId",metaValue:"A12WRJ2ZMDW3SU",metaDeleted:false,review:{connect:{oldId:"1761"}}}) { id } } `
    
MUTATIONS[446] = `mutation mutation446 { createReviewMeta(data: {oldId:"11171",metaType:"",metaName:"preTrackId",metaValue:"1581",metaDeleted:false,review:{connect:{oldId:"1771"}}}) { id } } `
    
MUTATIONS[447] = `mutation mutation447 { createReviewMeta(data: {oldId:"11181",metaType:"",metaName:"preAuthorId",metaValue:"611",metaDeleted:false,review:{connect:{oldId:"1771"}}}) { id } } `
    
MUTATIONS[448] = `mutation mutation448 { createReviewMeta(data: {oldId:"11191",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"1791"}}}) { id } } `
    
MUTATIONS[449] = `mutation mutation449 { createReviewMeta(data: {oldId:"11201",metaType:"",metaName:"preAuthorId",metaValue:"621",metaDeleted:false,review:{connect:{oldId:"1791"}}}) { id } } `
    
MUTATIONS[450] = `mutation mutation450 { createReviewMeta(data: {oldId:"11211",metaType:"",metaName:"questionType3",metaValue:"mult_choice",metaDeleted:false,review:{connect:{oldId:"1791"}}}) { id } } `
    
MUTATIONS[451] = `mutation mutation451 { createReviewMeta(data: {oldId:"11221",metaType:"",metaName:"questionAnswer3",metaValue:"2",metaDeleted:false,review:{connect:{oldId:"1791"}}}) { id } } `
    
MUTATIONS[452] = `mutation mutation452 { createReviewMeta(data: {oldId:"11231",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1791"}}}) { id } } `
    
MUTATIONS[453] = `mutation mutation453 { createReviewMeta(data: {oldId:"11241",metaType:"",metaName:"questionAnswer2",metaValue:"7",metaDeleted:false,review:{connect:{oldId:"1791"}}}) { id } } `
    
MUTATIONS[454] = `mutation mutation454 { createReviewMeta(data: {oldId:"11251",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1791"}}}) { id } } `
    
MUTATIONS[455] = `mutation mutation455 { createReviewMeta(data: {oldId:"11261",metaType:"",metaName:"questionAnswer1",metaValue:"Yes.%20The%20lyrics%20are%20uplifting%20and%20reaffirming.%20They%20show%20that%20no%20matter%20what%20you%27ve%20done%20in%20the%20past%2C%20you%20still%20have%20the%20capability%20of%20doing%20good%20in%20life.%20",metaDeleted:false,review:{connect:{oldId:"1791"}}}) { id } } `
    
MUTATIONS[456] = `mutation mutation456 { createReviewMeta(data: {oldId:"11281",metaType:"",metaName:"assignmentId",metaValue:"392CY0QWG1RZZUHYODPDCH0TDVHI48",metaDeleted:false,review:{connect:{oldId:"1791"}}}) { id } } `
    
MUTATIONS[457] = `mutation mutation457 { createReviewMeta(data: {oldId:"11291",metaType:"",metaName:"hitId",metaValue:"356TQKY9XFX06RQARN6REKV6MCG78O",metaDeleted:false,review:{connect:{oldId:"1791"}}}) { id } } `
    
MUTATIONS[458] = `mutation mutation458 { createReviewMeta(data: {oldId:"11301",metaType:"",metaName:"workerId",metaValue:"A2S96ZZ70YFPSK",metaDeleted:false,review:{connect:{oldId:"1791"}}}) { id } } `
    
MUTATIONS[459] = `mutation mutation459 { createReviewMeta(data: {oldId:"11311",metaType:"",metaName:"preTrackId",metaValue:"851",metaDeleted:false,review:{connect:{oldId:"1801"}}}) { id } } `
    
MUTATIONS[460] = `mutation mutation460 { createReviewMeta(data: {oldId:"11321",metaType:"",metaName:"preAuthorId",metaValue:"621",metaDeleted:false,review:{connect:{oldId:"1801"}}}) { id } } `
    
MUTATIONS[461] = `mutation mutation461 { createReviewMeta(data: {oldId:"11331",metaType:"",metaName:"questionType2",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1801"}}}) { id } } `
    
MUTATIONS[462] = `mutation mutation462 { createReviewMeta(data: {oldId:"11341",metaType:"",metaName:"questionAnswer2",metaValue:"This%20song%20is%20very%20optimistic%20and%20uplifting.%20The%20beat%20is%20good%20and%20make%20you%20feel%20excited.%20The%20song%20builds%20up%20throughout%20to%20a%20satisfying%20conclusion.%20I%20find%20the%20combination%20of%20the%20different%20genres%20very%20interesting.%20",metaDeleted:false,review:{connect:{oldId:"1801"}}}) { id } } `
    
MUTATIONS[463] = `mutation mutation463 { createReviewMeta(data: {oldId:"11351",metaType:"",metaName:"questionType1",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1801"}}}) { id } } `
    
MUTATIONS[464] = `mutation mutation464 { createReviewMeta(data: {oldId:"11361",metaType:"",metaName:"questionAnswer1",metaValue:"7",metaDeleted:false,review:{connect:{oldId:"1801"}}}) { id } } `
    
MUTATIONS[465] = `mutation mutation465 { createReviewMeta(data: {oldId:"11391",metaType:"",metaName:"assignmentId",metaValue:"3SNLUL3WO4N06TJJOMD8H1QFTC0LUD",metaDeleted:false,review:{connect:{oldId:"1801"}}}) { id } } `
    
MUTATIONS[466] = `mutation mutation466 { createReviewMeta(data: {oldId:"11401",metaType:"",metaName:"hitId",metaValue:"39N6W9XWRDNYEQSTXU8FJAW1EUZYGT",metaDeleted:false,review:{connect:{oldId:"1801"}}}) { id } } `
    
MUTATIONS[467] = `mutation mutation467 { createReviewMeta(data: {oldId:"11411",metaType:"",metaName:"workerId",metaValue:"A2S96ZZ70YFPSK",metaDeleted:false,review:{connect:{oldId:"1801"}}}) { id } } `
    
MUTATIONS[468] = `mutation mutation468 { createFileMeta(data: {oldId:"11421",metaType:"",metaName:"attachedFile",metaValue:"2014/12/13-Big-Brother1.mp3",metaDeleted:false,file:{connect:{oldId:"1811"}}}) { id } } `
    
MUTATIONS[469] = `mutation mutation469 { createFileMeta(data: {oldId:"11431",metaType:"",metaName:"thumbnailId",metaValue:"381",metaDeleted:false,file:{connect:{oldId:"1811"}}}) { id } } `
    
MUTATIONS[470] = `mutation mutation470 { createFileMeta(data: {oldId:"11441",metaType:"",metaName:"s3Info",metaValue:"/uploads/2015/03/13-Big-Brother1.mp3",metaDeleted:false,file:{connect:{oldId:"1811"}}}) { id } } `
    
MUTATIONS[471] = `mutation mutation471 { createFileMeta(data: {oldId:"11451",metaType:"",metaName:"fileMetadata",metaValue:"a%3A23%3A%7Bs%3A10%3A%5C%22dataformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22channels%5C%22%3Bi%3A2%3Bs%3A11%3A%5C%22sample_rate%5C%22%3Bi%3A44100%3Bs%3A7%3A%5C%22bitrate%5C%22%3Bi%3A320000%3Bs%3A11%3A%5C%22channelmode%5C%22%3Bs%3A6%3A%5C%22stereo%5C%22%3Bs%3A12%3A%5C%22bitrate_mode%5C%22%3Bs%3A3%3A%5C%22cbr%5C%22%3Bs%3A8%3A%5C%22lossless%5C%22%3Bb%3A0%3Bs%3A15%3A%5C%22encoder_options%5C%22%3Bs%3A6%3A%5C%22CBR320%5C%22%3Bs%3A17%3A%5C%22compression_ratio%5C%22%3Bd%3A0.22675736961451248%3Bs%3A10%3A%5C%22fileformat%5C%22%3Bs%3A3%3A%5C%22mp3%5C%22%3Bs%3A8%3A%5C%22filesize%5C%22%3Bi%3A11583405%3Bs%3A9%3A%5C%22mime_type%5C%22%3Bs%3A10%3A%5C%22audio/mpeg%5C%22%3Bs%3A6%3A%5C%22length%5C%22%3Bi%3A287%3Bs%3A16%3A%5C%22length_formatted%5C%22%3Bs%3A4%3A%5C%224%3A47%5C%22%3Bs%3A4%3A%5C%22band%5C%22%3Bs%3A10%3A%5C%22Kanye%20West%5C%22%3Bs%3A6%3A%5C%22artist%5C%22%3Bs%3A10%3A%5C%22Kanye%20West%5C%22%3Bs%3A5%3A%5C%22title%5C%22%3Bs%3A11%3A%5C%22Big%20Brother%5C%22%3Bs%3A5%3A%5C%22album%5C%22%3Bs%3A10%3A%5C%22Graduation%5C%22%3Bs%3A4%3A%5C%22year%5C%22%3Bs%3A4%3A%5C%222007%5C%22%3Bs%3A12%3A%5C%22track_number%5C%22%3Bs%3A2%3A%5C%2213%5C%22%3Bs%3A5%3A%5C%22genre%5C%22%3Bs%3A7%3A%5C%22Hip-Hop%5C%22%3Bs%3A16%3A%5C%22encoder_settings%5C%22%3Bs%3A10%3A%5C%22FLAC%201.2.1%5C%22%3Bs%3A5%3A%5C%22image%5C%22%3Ba%3A3%3A%7Bs%3A4%3A%5C%22mime%5C%22%3Bs%3A10%3A%5C%22image/jpeg%5C%22%3Bs%3A5%3A%5C%22width%5C%22%3Bi%3A300%3Bs%3A6%3A%5C%22height%5C%22%3Bi%3A300%3B%7D%7D",metaDeleted:false,file:{connect:{oldId:"1811"}}}) { id } } `
    
MUTATIONS[472] = `mutation mutation472 { createFileMeta(data: {oldId:"11461",metaType:"",metaName:"attachedFile",metaValue:"2014/12/graduation.jpg",metaDeleted:false,file:{connect:{oldId:"1821"}}}) { id } } `
    
MUTATIONS[473] = `mutation mutation473 { createFileMeta(data: {oldId:"11471",metaType:"",metaName:"s3Info",metaValue:"/uploads/2014/12/graduation.jpg",metaDeleted:false,file:{connect:{oldId:"1821"}}}) { id } } `
    
MUTATIONS[474] = `mutation mutation474 { createFileMeta(data: {oldId:"11481",metaType:"",metaName:"fileMetadata",metaValue:"a%3A4%3A%7Bs%3A5%3A%5C%22width%5C%22%3Bi%3A736%3Bs%3A6%3A%5C%22height%5C%22%3Bi%3A736%3Bs%3A4%3A%5C%22file%5C%22%3Bs%3A22%3A%5C%222014/12/graduation.jpg%5C%22%3Bs%3A10%3A%5C%22image_meta%5C%22%3Ba%3A11%3A%7Bs%3A8%3A%5C%22aperture%5C%22%3Bi%3A0%3Bs%3A6%3A%5C%22credit%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A6%3A%5C%22camera%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A7%3A%5C%22caption%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A17%3A%5C%22created_timestamp%5C%22%3Bi%3A0%3Bs%3A9%3A%5C%22copyright%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A12%3A%5C%22focal_length%5C%22%3Bi%3A0%3Bs%3A3%3A%5C%22iso%5C%22%3Bi%3A0%3Bs%3A13%3A%5C%22shutter_speed%5C%22%3Bi%3A0%3Bs%3A5%3A%5C%22title%5C%22%3Bs%3A0%3A%5C%22%5C%22%3Bs%3A11%3A%5C%22orientation%5C%22%3Bi%3A0%3B%7D%7D",metaDeleted:false,file:{connect:{oldId:"1821"}}}) { id } } `
    
MUTATIONS[475] = `mutation mutation475 { createReviewMeta(data: {oldId:"11731",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"1841"}}}) { id } } `
    
MUTATIONS[476] = `mutation mutation476 { createReviewMeta(data: {oldId:"11741",metaType:"",metaName:"preAuthorId",metaValue:"A15ZCCQ880GIN0",metaDeleted:false,review:{connect:{oldId:"1841"}}}) { id } } `
    
MUTATIONS[477] = `mutation mutation477 { createReviewMeta(data: {oldId:"11751",metaType:"",metaName:"preUserFavDemo",metaValue:"Pop",metaDeleted:false,review:{connect:{oldId:"1841"}}}) { id } } `
    
MUTATIONS[478] = `mutation mutation478 { createReviewMeta(data: {oldId:"11761",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"1841"}}}) { id } } `
    
MUTATIONS[479] = `mutation mutation479 { createReviewMeta(data: {oldId:"11771",metaType:"",metaName:"preUserAgeDemo",metaValue:"27",metaDeleted:false,review:{connect:{oldId:"1841"}}}) { id } } `
    
MUTATIONS[480] = `mutation mutation480 { createReviewMeta(data: {oldId:"11781",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"1841"}}}) { id } } `
    
MUTATIONS[481] = `mutation mutation481 { createReviewMeta(data: {oldId:"11791",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"1851"}}}) { id } } `
    
MUTATIONS[482] = `mutation mutation482 { createReviewMeta(data: {oldId:"11801",metaType:"",metaName:"preAuthorId",metaValue:"A2TT6FAIWFD25N",metaDeleted:false,review:{connect:{oldId:"1851"}}}) { id } } `
    
MUTATIONS[483] = `mutation mutation483 { createReviewMeta(data: {oldId:"11811",metaType:"",metaName:"preUserFavDemo",metaValue:"Rock",metaDeleted:false,review:{connect:{oldId:"1851"}}}) { id } } `
    
MUTATIONS[484] = `mutation mutation484 { createReviewMeta(data: {oldId:"11821",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"1851"}}}) { id } } `
    
MUTATIONS[485] = `mutation mutation485 { createReviewMeta(data: {oldId:"11831",metaType:"",metaName:"preUserAgeDemo",metaValue:"35",metaDeleted:false,review:{connect:{oldId:"1851"}}}) { id } } `
    
MUTATIONS[486] = `mutation mutation486 { createReviewMeta(data: {oldId:"11841",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"1851"}}}) { id } } `
    
MUTATIONS[487] = `mutation mutation487 { createReviewMeta(data: {oldId:"11851",metaType:"",metaName:"preTrackId",metaValue:"1581",metaDeleted:false,review:{connect:{oldId:"1861"}}}) { id } } `
    
MUTATIONS[488] = `mutation mutation488 { createReviewMeta(data: {oldId:"11861",metaType:"",metaName:"preAuthorId",metaValue:"A1MYLQQL8BBOYT",metaDeleted:false,review:{connect:{oldId:"1861"}}}) { id } } `
    
MUTATIONS[489] = `mutation mutation489 { createReviewMeta(data: {oldId:"11871",metaType:"",metaName:"preUserFavDemo",metaValue:"Electronic",metaDeleted:false,review:{connect:{oldId:"1861"}}}) { id } } `
    
MUTATIONS[490] = `mutation mutation490 { createReviewMeta(data: {oldId:"11881",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"1861"}}}) { id } } `
    
MUTATIONS[491] = `mutation mutation491 { createReviewMeta(data: {oldId:"11891",metaType:"",metaName:"preUserAgeDemo",metaValue:"34",metaDeleted:false,review:{connect:{oldId:"1861"}}}) { id } } `
    
MUTATIONS[492] = `mutation mutation492 { createReviewMeta(data: {oldId:"11901",metaType:"",metaName:"preUserExplicitDemo",metaValue:"off",metaDeleted:false,review:{connect:{oldId:"1861"}}}) { id } } `
    
MUTATIONS[493] = `mutation mutation493 { createReviewMeta(data: {oldId:"11911",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1861"}}}) { id } } `
    
MUTATIONS[494] = `mutation mutation494 { createReviewMeta(data: {oldId:"11921",metaType:"",metaName:"questionAnswer2",metaValue:"8",metaDeleted:false,review:{connect:{oldId:"1861"}}}) { id } } `
    
MUTATIONS[495] = `mutation mutation495 { createReviewMeta(data: {oldId:"11931",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1861"}}}) { id } } `
    
MUTATIONS[496] = `mutation mutation496 { createReviewMeta(data: {oldId:"11941",metaType:"",metaName:"questionAnswer1",metaValue:"Kanye%20made%20something%20out%20of%20himself%20because%20he%20wanted%20to%20experience%20a%20life%20of%20excitement%20and%20luxury%3A%20The%20Glory.%20And%20so%20is%20everybody%20else%20out%20there%20who%20went%20from%20nothing%20to%20something.%20And%20now%20he%27s%20made%20it--is%20he%20still%20legit%2C%20or%20is%20he%20fronting%3F%20Where%20does%20he%20go%20from%20here%3F",metaDeleted:false,review:{connect:{oldId:"1861"}}}) { id } } `
    
MUTATIONS[497] = `mutation mutation497 { createReviewMeta(data: {oldId:"11951",metaType:"",metaName:"love_artist_0",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"1861"}}}) { id } } `
    
MUTATIONS[498] = `mutation mutation498 { createReviewMeta(data: {oldId:"11961",metaType:"",metaName:"assignmentId",metaValue:"37XITHEISW9FNXXW7FP497D8S6TRCE",metaDeleted:false,review:{connect:{oldId:"1861"}}}) { id } } `
    
MUTATIONS[499] = `mutation mutation499 { createReviewMeta(data: {oldId:"11971",metaType:"",metaName:"hitId",metaValue:"3TZ0XG8CBUK4KAE36K4BSGMCH4E89F",metaDeleted:false,review:{connect:{oldId:"1861"}}}) { id } } `
    
MUTATIONS[500] = `mutation mutation500 { createReviewMeta(data: {oldId:"11981",metaType:"",metaName:"workerId",metaValue:"A1MYLQQL8BBOYT",metaDeleted:false,review:{connect:{oldId:"1861"}}}) { id } } `
    
MUTATIONS[501] = `mutation mutation501 { createReviewMeta(data: {oldId:"11991",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"1871"}}}) { id } } `
    
MUTATIONS[502] = `mutation mutation502 { createReviewMeta(data: {oldId:"12001",metaType:"",metaName:"preAuthorId",metaValue:"A2CJZQHRGRY7J2",metaDeleted:false,review:{connect:{oldId:"1871"}}}) { id } } `
    
MUTATIONS[503] = `mutation mutation503 { createReviewMeta(data: {oldId:"12011",metaType:"",metaName:"preUserFavDemo",metaValue:"Piano",metaDeleted:false,review:{connect:{oldId:"1871"}}}) { id } } `
    
MUTATIONS[504] = `mutation mutation504 { createReviewMeta(data: {oldId:"12021",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"1871"}}}) { id } } `
    
MUTATIONS[505] = `mutation mutation505 { createReviewMeta(data: {oldId:"12031",metaType:"",metaName:"preUserAgeDemo",metaValue:"23",metaDeleted:false,review:{connect:{oldId:"1871"}}}) { id } } `
    
MUTATIONS[506] = `mutation mutation506 { createReviewMeta(data: {oldId:"12041",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"1871"}}}) { id } } `
    
MUTATIONS[507] = `mutation mutation507 { createReviewMeta(data: {oldId:"12051",metaType:"",metaName:"preTrackId",metaValue:"1581",metaDeleted:false,review:{connect:{oldId:"1881"}}}) { id } } `
    
MUTATIONS[508] = `mutation mutation508 { createReviewMeta(data: {oldId:"12061",metaType:"",metaName:"preAuthorId",metaValue:"A2XGM40LXGY8MD",metaDeleted:false,review:{connect:{oldId:"1881"}}}) { id } } `
    
MUTATIONS[509] = `mutation mutation509 { createReviewMeta(data: {oldId:"12071",metaType:"",metaName:"preUserFavDemo",metaValue:"Piano",metaDeleted:false,review:{connect:{oldId:"1881"}}}) { id } } `
    
MUTATIONS[510] = `mutation mutation510 { createReviewMeta(data: {oldId:"12081",metaType:"",metaName:"preUserGenderDemo",metaValue:"female",metaDeleted:false,review:{connect:{oldId:"1881"}}}) { id } } `
    
MUTATIONS[511] = `mutation mutation511 { createReviewMeta(data: {oldId:"12091",metaType:"",metaName:"preUserAgeDemo",metaValue:"36",metaDeleted:false,review:{connect:{oldId:"1881"}}}) { id } } `
    
MUTATIONS[512] = `mutation mutation512 { createReviewMeta(data: {oldId:"12101",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"1881"}}}) { id } } `
    
MUTATIONS[513] = `mutation mutation513 { createReviewMeta(data: {oldId:"12111",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1871"}}}) { id } } `
    
MUTATIONS[514] = `mutation mutation514 { createReviewMeta(data: {oldId:"12121",metaType:"",metaName:"questionAnswer2",metaValue:"",metaDeleted:false,review:{connect:{oldId:"1871"}}}) { id } } `
    
MUTATIONS[515] = `mutation mutation515 { createReviewMeta(data: {oldId:"12131",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1871"}}}) { id } } `
    
MUTATIONS[516] = `mutation mutation516 { createReviewMeta(data: {oldId:"12141",metaType:"",metaName:"questionAnswer1",metaValue:"giving%20an%20introduction%20in%20a%20show%20.He%20voice%20is%20effective.Piano%20was%20played%20match-fully%20with%20his%20voice.%20",metaDeleted:false,review:{connect:{oldId:"1871"}}}) { id } } `
    
MUTATIONS[517] = `mutation mutation517 { createReviewMeta(data: {oldId:"12151",metaType:"",metaName:"assignmentId",metaValue:"3WRFBPLXRAO6VZ9LLFXM7K44LWSN3P",metaDeleted:false,review:{connect:{oldId:"1871"}}}) { id } } `
    
MUTATIONS[518] = `mutation mutation518 { createReviewMeta(data: {oldId:"12161",metaType:"",metaName:"hitId",metaValue:"3TZ0XG8CBUK4KAE36K4BSGMCH4E89F",metaDeleted:false,review:{connect:{oldId:"1871"}}}) { id } } `
    
MUTATIONS[519] = `mutation mutation519 { createReviewMeta(data: {oldId:"12171",metaType:"",metaName:"workerId",metaValue:"A2CJZQHRGRY7J2",metaDeleted:false,review:{connect:{oldId:"1871"}}}) { id } } `
    
MUTATIONS[520] = `mutation mutation520 { createReviewMeta(data: {oldId:"12201",metaType:"",metaName:"preTrackId",metaValue:"851",metaDeleted:false,review:{connect:{oldId:"1891"}}}) { id } } `
    
MUTATIONS[521] = `mutation mutation521 { createReviewMeta(data: {oldId:"12211",metaType:"",metaName:"preAuthorId",metaValue:"A2O200JODCD036",metaDeleted:false,review:{connect:{oldId:"1891"}}}) { id } } `
    
MUTATIONS[522] = `mutation mutation522 { createReviewMeta(data: {oldId:"12221",metaType:"",metaName:"preUserFavDemo",metaValue:"Pop",metaDeleted:false,review:{connect:{oldId:"1891"}}}) { id } } `
    
MUTATIONS[523] = `mutation mutation523 { createReviewMeta(data: {oldId:"12231",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"1891"}}}) { id } } `
    
MUTATIONS[524] = `mutation mutation524 { createReviewMeta(data: {oldId:"12241",metaType:"",metaName:"preUserAgeDemo",metaValue:"32",metaDeleted:false,review:{connect:{oldId:"1891"}}}) { id } } `
    
MUTATIONS[525] = `mutation mutation525 { createReviewMeta(data: {oldId:"12251",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"1891"}}}) { id } } `
    
MUTATIONS[526] = `mutation mutation526 { createReviewMeta(data: {oldId:"12261",metaType:"",metaName:"preTrackId",metaValue:"1381",metaDeleted:false,review:{connect:{oldId:"1901"}}}) { id } } `
    
MUTATIONS[527] = `mutation mutation527 { createReviewMeta(data: {oldId:"12271",metaType:"",metaName:"preAuthorId",metaValue:"A1MX8TF7B6K4Z",metaDeleted:false,review:{connect:{oldId:"1901"}}}) { id } } `
    
MUTATIONS[528] = `mutation mutation528 { createReviewMeta(data: {oldId:"12281",metaType:"",metaName:"preUserFavDemo",metaValue:"Piano",metaDeleted:false,review:{connect:{oldId:"1901"}}}) { id } } `
    
MUTATIONS[529] = `mutation mutation529 { createReviewMeta(data: {oldId:"12291",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"1901"}}}) { id } } `
    
MUTATIONS[530] = `mutation mutation530 { createReviewMeta(data: {oldId:"12301",metaType:"",metaName:"preUserAgeDemo",metaValue:"20",metaDeleted:false,review:{connect:{oldId:"1901"}}}) { id } } `
    
MUTATIONS[531] = `mutation mutation531 { createReviewMeta(data: {oldId:"12311",metaType:"",metaName:"preUserExplicitDemo",metaValue:"off",metaDeleted:false,review:{connect:{oldId:"1901"}}}) { id } } `
    
MUTATIONS[532] = `mutation mutation532 { createReviewMeta(data: {oldId:"12321",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1901"}}}) { id } } `
    
MUTATIONS[533] = `mutation mutation533 { createReviewMeta(data: {oldId:"12331",metaType:"",metaName:"questionAnswer2",metaValue:"8",metaDeleted:false,review:{connect:{oldId:"1901"}}}) { id } } `
    
MUTATIONS[534] = `mutation mutation534 { createReviewMeta(data: {oldId:"12341",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1901"}}}) { id } } `
    
MUTATIONS[535] = `mutation mutation535 { createReviewMeta(data: {oldId:"12351",metaType:"",metaName:"questionAnswer1",metaValue:"I%20believe%20he%20is%20talking%20about%20brotherhood%20and%20spreading%20love%20among%20his%20family%20and%20fans%20via%20this%20song.",metaDeleted:false,review:{connect:{oldId:"1901"}}}) { id } } `
    
MUTATIONS[536] = `mutation mutation536 { createReviewMeta(data: {oldId:"12371",metaType:"",metaName:"assignmentId",metaValue:"3180JW2OT4CDQO54K0TNTAL7Q8EJ57",metaDeleted:false,review:{connect:{oldId:"1901"}}}) { id } } `
    
MUTATIONS[537] = `mutation mutation537 { createReviewMeta(data: {oldId:"12381",metaType:"",metaName:"hitId",metaValue:"3TZ0XG8CBUK4KAE36K4BSGMCH4E89F",metaDeleted:false,review:{connect:{oldId:"1901"}}}) { id } } `
    
MUTATIONS[538] = `mutation mutation538 { createReviewMeta(data: {oldId:"12391",metaType:"",metaName:"workerId",metaValue:"A1MX8TF7B6K4Z",metaDeleted:false,review:{connect:{oldId:"1901"}}}) { id } } `
    
MUTATIONS[539] = `mutation mutation539 { createReviewMeta(data: {oldId:"12401",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"1911"}}}) { id } } `
    
MUTATIONS[540] = `mutation mutation540 { createReviewMeta(data: {oldId:"12411",metaType:"",metaName:"preAuthorId",metaValue:"A1JF9ZNXWK5QZU",metaDeleted:false,review:{connect:{oldId:"1911"}}}) { id } } `
    
MUTATIONS[541] = `mutation mutation541 { createReviewMeta(data: {oldId:"12421",metaType:"",metaName:"preUserFavDemo",metaValue:"Pop",metaDeleted:false,review:{connect:{oldId:"1911"}}}) { id } } `
    
MUTATIONS[542] = `mutation mutation542 { createReviewMeta(data: {oldId:"12431",metaType:"",metaName:"preUserGenderDemo",metaValue:"female",metaDeleted:false,review:{connect:{oldId:"1911"}}}) { id } } `
    
MUTATIONS[543] = `mutation mutation543 { createReviewMeta(data: {oldId:"12441",metaType:"",metaName:"preUserAgeDemo",metaValue:"31",metaDeleted:false,review:{connect:{oldId:"1911"}}}) { id } } `
    
MUTATIONS[544] = `mutation mutation544 { createReviewMeta(data: {oldId:"12451",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"1911"}}}) { id } } `
    
MUTATIONS[545] = `mutation mutation545 { createReviewMeta(data: {oldId:"12461",metaType:"",metaName:"preTrackId",metaValue:"851",metaDeleted:false,review:{connect:{oldId:"1921"}}}) { id } } `
    
MUTATIONS[546] = `mutation mutation546 { createReviewMeta(data: {oldId:"12471",metaType:"",metaName:"preAuthorId",metaValue:"AP5HF8WH24MKV",metaDeleted:false,review:{connect:{oldId:"1921"}}}) { id } } `
    
MUTATIONS[547] = `mutation mutation547 { createReviewMeta(data: {oldId:"12481",metaType:"",metaName:"preUserFavDemo",metaValue:"Rock",metaDeleted:false,review:{connect:{oldId:"1921"}}}) { id } } `
    
MUTATIONS[548] = `mutation mutation548 { createReviewMeta(data: {oldId:"12491",metaType:"",metaName:"preUserGenderDemo",metaValue:"female",metaDeleted:false,review:{connect:{oldId:"1921"}}}) { id } } `
    
MUTATIONS[549] = `mutation mutation549 { createReviewMeta(data: {oldId:"12501",metaType:"",metaName:"preUserAgeDemo",metaValue:"25",metaDeleted:false,review:{connect:{oldId:"1921"}}}) { id } } `
    
MUTATIONS[550] = `mutation mutation550 { createReviewMeta(data: {oldId:"12511",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"1921"}}}) { id } } `
    
MUTATIONS[551] = `mutation mutation551 { createReviewMeta(data: {oldId:"12521",metaType:"",metaName:"questionType3",metaValue:"mult_choice",metaDeleted:false,review:{connect:{oldId:"1911"}}}) { id } } `
    
MUTATIONS[552] = `mutation mutation552 { createReviewMeta(data: {oldId:"12531",metaType:"",metaName:"questionAnswer3",metaValue:"2",metaDeleted:false,review:{connect:{oldId:"1911"}}}) { id } } `
    
MUTATIONS[553] = `mutation mutation553 { createReviewMeta(data: {oldId:"12541",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1911"}}}) { id } } `
    
MUTATIONS[554] = `mutation mutation554 { createReviewMeta(data: {oldId:"12551",metaType:"",metaName:"questionAnswer2",metaValue:"10",metaDeleted:false,review:{connect:{oldId:"1911"}}}) { id } } `
    
MUTATIONS[555] = `mutation mutation555 { createReviewMeta(data: {oldId:"12561",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1911"}}}) { id } } `
    
MUTATIONS[556] = `mutation mutation556 { createReviewMeta(data: {oldId:"12571",metaType:"",metaName:"questionAnswer1",metaValue:"Definitely%20yes.%20This%20is%20lovely%20song.%20I%20like%20this%20song%20so%20much.%20%0D%0AThat%27s%20part%20of%20it.%20%0D%0AWhen%20he%20says%20he%20had%20a%20dream%20he%20could%20by%20his%20way%20to%20heaven%2C%20but%20when%20he%20woke%20he%20bought%20a%20necklace%20-%20he%20means%20that%20like%2C%20he%20has%20the%20option%20of%20choosing%20God%20or%20money%2C%20and%20he%20keeps%20choosing%20money%20over%20and%20over%20again.%20It%27s%20basically%20about%20how%20hard%20it%20is%20to%20follow%20God%2C%20and%20not%20sin%2C%20when%20you%27re%20put%20into%20the%20spotlight%20of%20girls.%20He%20talks%20about%20how%20nobody%20can%20change%20him%2C%20except%20him%2C%20but%20he%20keeps%20making%20the%20wrong%20decisions%20in%20his%20faith%2C%20and%20it%27s%20hard%20not%20to%20fall%20into%20that%20world%20of%20sin%2Cwhen%20he%27s%20usually%20in%20the%20spotlight%20for%20one%20thing%20or%20another.%0D%0A%0D%0A",metaDeleted:false,review:{connect:{oldId:"1911"}}}) { id } } `
    
MUTATIONS[557] = `mutation mutation557 { createReviewMeta(data: {oldId:"12581",metaType:"",metaName:"love_artist_0",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"1911"}}}) { id } } `
    
MUTATIONS[558] = `mutation mutation558 { createReviewMeta(data: {oldId:"12591",metaType:"",metaName:"assignmentId",metaValue:"3M1CVSFP605RIHLYAM4DYMDFWH7AQV",metaDeleted:false,review:{connect:{oldId:"1911"}}}) { id } } `
    
MUTATIONS[559] = `mutation mutation559 { createReviewMeta(data: {oldId:"12601",metaType:"",metaName:"hitId",metaValue:"3TZ0XG8CBUK4KAE36K4BSGMCH4E89F",metaDeleted:false,review:{connect:{oldId:"1911"}}}) { id } } `
    
MUTATIONS[560] = `mutation mutation560 { createReviewMeta(data: {oldId:"12611",metaType:"",metaName:"workerId",metaValue:"A1JF9ZNXWK5QZU",metaDeleted:false,review:{connect:{oldId:"1911"}}}) { id } } `
    
MUTATIONS[561] = `mutation mutation561 { createReviewMeta(data: {oldId:"12621",metaType:"",metaName:"preTrackId",metaValue:"1381",metaDeleted:false,review:{connect:{oldId:"1931"}}}) { id } } `
    
MUTATIONS[562] = `mutation mutation562 { createReviewMeta(data: {oldId:"12631",metaType:"",metaName:"preAuthorId",metaValue:"A1T5INVSQWQ5AI",metaDeleted:false,review:{connect:{oldId:"1931"}}}) { id } } `
    
MUTATIONS[563] = `mutation mutation563 { createReviewMeta(data: {oldId:"12641",metaType:"",metaName:"preUserFavDemo",metaValue:"Piano",metaDeleted:false,review:{connect:{oldId:"1931"}}}) { id } } `
    
MUTATIONS[564] = `mutation mutation564 { createReviewMeta(data: {oldId:"12651",metaType:"",metaName:"preUserGenderDemo",metaValue:"female",metaDeleted:false,review:{connect:{oldId:"1931"}}}) { id } } `
    
MUTATIONS[565] = `mutation mutation565 { createReviewMeta(data: {oldId:"12661",metaType:"",metaName:"preUserAgeDemo",metaValue:"32",metaDeleted:false,review:{connect:{oldId:"1931"}}}) { id } } `
    
MUTATIONS[566] = `mutation mutation566 { createReviewMeta(data: {oldId:"12671",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"1931"}}}) { id } } `
    
MUTATIONS[567] = `mutation mutation567 { createReviewMeta(data: {oldId:"12681",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"1941"}}}) { id } } `
    
MUTATIONS[568] = `mutation mutation568 { createReviewMeta(data: {oldId:"12691",metaType:"",metaName:"preAuthorId",metaValue:"AP5HF8WH24MKV",metaDeleted:false,review:{connect:{oldId:"1941"}}}) { id } } `
    
MUTATIONS[569] = `mutation mutation569 { createReviewMeta(data: {oldId:"12701",metaType:"",metaName:"preUserFavDemo",metaValue:"Rock",metaDeleted:false,review:{connect:{oldId:"1941"}}}) { id } } `
    
MUTATIONS[570] = `mutation mutation570 { createReviewMeta(data: {oldId:"12711",metaType:"",metaName:"preUserGenderDemo",metaValue:"female",metaDeleted:false,review:{connect:{oldId:"1941"}}}) { id } } `
    
MUTATIONS[571] = `mutation mutation571 { createReviewMeta(data: {oldId:"12721",metaType:"",metaName:"preUserAgeDemo",metaValue:"25",metaDeleted:false,review:{connect:{oldId:"1941"}}}) { id } } `
    
MUTATIONS[572] = `mutation mutation572 { createReviewMeta(data: {oldId:"12731",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"1941"}}}) { id } } `
    
MUTATIONS[573] = `mutation mutation573 { createReviewMeta(data: {oldId:"12741",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"1951"}}}) { id } } `
    
MUTATIONS[574] = `mutation mutation574 { createReviewMeta(data: {oldId:"12751",metaType:"",metaName:"preAuthorId",metaValue:"A3OHZIRO4MJHCM",metaDeleted:false,review:{connect:{oldId:"1951"}}}) { id } } `
    
MUTATIONS[575] = `mutation mutation575 { createReviewMeta(data: {oldId:"12761",metaType:"",metaName:"preUserFavDemo",metaValue:"Pop",metaDeleted:false,review:{connect:{oldId:"1951"}}}) { id } } `
    
MUTATIONS[576] = `mutation mutation576 { createReviewMeta(data: {oldId:"12771",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"1951"}}}) { id } } `
    
MUTATIONS[577] = `mutation mutation577 { createReviewMeta(data: {oldId:"12781",metaType:"",metaName:"preUserAgeDemo",metaValue:"21",metaDeleted:false,review:{connect:{oldId:"1951"}}}) { id } } `
    
MUTATIONS[578] = `mutation mutation578 { createReviewMeta(data: {oldId:"12791",metaType:"",metaName:"preUserExplicitDemo",metaValue:"off",metaDeleted:false,review:{connect:{oldId:"1951"}}}) { id } } `
    
MUTATIONS[579] = `mutation mutation579 { createReviewMeta(data: {oldId:"12801",metaType:"",metaName:"questionType3",metaValue:"mult_choice",metaDeleted:false,review:{connect:{oldId:"1941"}}}) { id } } `
    
MUTATIONS[580] = `mutation mutation580 { createReviewMeta(data: {oldId:"12811",metaType:"",metaName:"questionAnswer3",metaValue:"4",metaDeleted:false,review:{connect:{oldId:"1941"}}}) { id } } `
    
MUTATIONS[581] = `mutation mutation581 { createReviewMeta(data: {oldId:"12821",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1941"}}}) { id } } `
    
MUTATIONS[582] = `mutation mutation582 { createReviewMeta(data: {oldId:"12831",metaType:"",metaName:"questionAnswer2",metaValue:"7",metaDeleted:false,review:{connect:{oldId:"1941"}}}) { id } } `
    
MUTATIONS[583] = `mutation mutation583 { createReviewMeta(data: {oldId:"12841",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1941"}}}) { id } } `
    
MUTATIONS[584] = `mutation mutation584 { createReviewMeta(data: {oldId:"12851",metaType:"",metaName:"questionAnswer1",metaValue:"yes%20he%20has%20an%20attitude%20that%20nothing%20in%20impossible.%26%20he%20said%20that%20no%20body%20can%20told%20me%20nothing%20happened.",metaDeleted:false,review:{connect:{oldId:"1941"}}}) { id } } `
    
MUTATIONS[585] = `mutation mutation585 { createReviewMeta(data: {oldId:"12861",metaType:"",metaName:"love_artist_0",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"1941"}}}) { id } } `
    
MUTATIONS[586] = `mutation mutation586 { createReviewMeta(data: {oldId:"12871",metaType:"",metaName:"assignmentId",metaValue:"38YMOXR4MUZVFC5HWIM7A6TFOZZ6W6",metaDeleted:false,review:{connect:{oldId:"1941"}}}) { id } } `
    
MUTATIONS[587] = `mutation mutation587 { createReviewMeta(data: {oldId:"12881",metaType:"",metaName:"hitId",metaValue:"3TZ0XG8CBUK4KAE36K4BSGMCH4E89F",metaDeleted:false,review:{connect:{oldId:"1941"}}}) { id } } `
    
MUTATIONS[588] = `mutation mutation588 { createReviewMeta(data: {oldId:"12891",metaType:"",metaName:"workerId",metaValue:"AP5HF8WH24MKV",metaDeleted:false,review:{connect:{oldId:"1941"}}}) { id } } `
    
MUTATIONS[589] = `mutation mutation589 { createReviewMeta(data: {oldId:"12901",metaType:"",metaName:"questionType3",metaValue:"mult_choice",metaDeleted:false,review:{connect:{oldId:"1951"}}}) { id } } `
    
MUTATIONS[590] = `mutation mutation590 { createReviewMeta(data: {oldId:"12911",metaType:"",metaName:"questionAnswer3",metaValue:"4",metaDeleted:false,review:{connect:{oldId:"1951"}}}) { id } } `
    
MUTATIONS[591] = `mutation mutation591 { createReviewMeta(data: {oldId:"12921",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1951"}}}) { id } } `
    
MUTATIONS[592] = `mutation mutation592 { createReviewMeta(data: {oldId:"12931",metaType:"",metaName:"questionAnswer2",metaValue:"8",metaDeleted:false,review:{connect:{oldId:"1951"}}}) { id } } `
    
MUTATIONS[593] = `mutation mutation593 { createReviewMeta(data: {oldId:"12941",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1951"}}}) { id } } `
    
MUTATIONS[594] = `mutation mutation594 { createReviewMeta(data: {oldId:"12951",metaType:"",metaName:"questionAnswer1",metaValue:"No%2Ci%20dont%20think%20he%20has%20such%20an%20intention.i%20have%20read%20that%20he%20said%20in%20the%20following%20manner.%5C%22%20I%20just%20want%20you%20to%20understand%20that%20attempting%20to%20do%20clothing%20has%20been%20very%20difficult.%20And%20I%20have%20encountered%20countless%20amounts%20of%20bigotry%20along%20the%20way.%20I%20have%20millions%20of%20ideas%2C%20and%20I%20represent%20a%20new%20generation%20just%20trying%20to%20express%20themselves%20in%20a%20broken%20world.%5C%22these%20words%20are%20clear%20and%20it%20represents%20his%20pure%20view%20towards%20youth.",metaDeleted:false,review:{connect:{oldId:"1951"}}}) { id } } `
    
MUTATIONS[595] = `mutation mutation595 { createReviewMeta(data: {oldId:"12961",metaType:"",metaName:"love_artist_0",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"1951"}}}) { id } } `
    
MUTATIONS[596] = `mutation mutation596 { createReviewMeta(data: {oldId:"12971",metaType:"",metaName:"assignmentId",metaValue:"39ASUFLU6X7EHR3MC51RODZZEZTEXS",metaDeleted:false,review:{connect:{oldId:"1951"}}}) { id } } `
    
MUTATIONS[597] = `mutation mutation597 { createReviewMeta(data: {oldId:"12981",metaType:"",metaName:"hitId",metaValue:"3TZ0XG8CBUK4KAE36K4BSGMCH4E89F",metaDeleted:false,review:{connect:{oldId:"1951"}}}) { id } } `
    
MUTATIONS[598] = `mutation mutation598 { createReviewMeta(data: {oldId:"12991",metaType:"",metaName:"workerId",metaValue:"A3OHZIRO4MJHCM",metaDeleted:false,review:{connect:{oldId:"1951"}}}) { id } } `
    
MUTATIONS[599] = `mutation mutation599 { createReviewMeta(data: {oldId:"13001",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"1961"}}}) { id } } `
    
MUTATIONS[600] = `mutation mutation600 { createReviewMeta(data: {oldId:"13011",metaType:"",metaName:"preAuthorId",metaValue:"A1C2OBFO4FHP7G",metaDeleted:false,review:{connect:{oldId:"1961"}}}) { id } } `
    
MUTATIONS[601] = `mutation mutation601 { createReviewMeta(data: {oldId:"13021",metaType:"",metaName:"preUserFavDemo",metaValue:"Rock",metaDeleted:false,review:{connect:{oldId:"1961"}}}) { id } } `
    
MUTATIONS[602] = `mutation mutation602 { createReviewMeta(data: {oldId:"13031",metaType:"",metaName:"preUserGenderDemo",metaValue:"female",metaDeleted:false,review:{connect:{oldId:"1961"}}}) { id } } `
    
MUTATIONS[603] = `mutation mutation603 { createReviewMeta(data: {oldId:"13041",metaType:"",metaName:"preUserAgeDemo",metaValue:"32",metaDeleted:false,review:{connect:{oldId:"1961"}}}) { id } } `
    
MUTATIONS[604] = `mutation mutation604 { createReviewMeta(data: {oldId:"13051",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"1961"}}}) { id } } `
    
MUTATIONS[605] = `mutation mutation605 { createReviewMeta(data: {oldId:"13061",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1961"}}}) { id } } `
    
MUTATIONS[606] = `mutation mutation606 { createReviewMeta(data: {oldId:"13071",metaType:"",metaName:"questionAnswer2",metaValue:"7",metaDeleted:false,review:{connect:{oldId:"1961"}}}) { id } } `
    
MUTATIONS[607] = `mutation mutation607 { createReviewMeta(data: {oldId:"13081",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1961"}}}) { id } } `
    
MUTATIONS[608] = `mutation mutation608 { createReviewMeta(data: {oldId:"13091",metaType:"",metaName:"questionAnswer1",metaValue:"Kanye%20is%20trying%20to%20convey%20his%20feelings%20about%20his%20big%20brother.%20He%20narrates%20how%20a%20brother%20makes%20your%20life%20wonderful%20by%20being%20your%20friend%20and%20support.%20",metaDeleted:false,review:{connect:{oldId:"1961"}}}) { id } } `
    
MUTATIONS[609] = `mutation mutation609 { createReviewMeta(data: {oldId:"13101",metaType:"",metaName:"love_artist_0",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"1961"}}}) { id } } `
    
MUTATIONS[610] = `mutation mutation610 { createReviewMeta(data: {oldId:"13111",metaType:"",metaName:"assignmentId",metaValue:"34S6N1K2ZVJV17DZON69YM1PZ46HLG",metaDeleted:false,review:{connect:{oldId:"1961"}}}) { id } } `
    
MUTATIONS[611] = `mutation mutation611 { createReviewMeta(data: {oldId:"13121",metaType:"",metaName:"hitId",metaValue:"39N6W9XWRDNYEQSTXU8FJAW1EUZYGT",metaDeleted:false,review:{connect:{oldId:"1961"}}}) { id } } `
    
MUTATIONS[612] = `mutation mutation612 { createReviewMeta(data: {oldId:"13131",metaType:"",metaName:"workerId",metaValue:"A1C2OBFO4FHP7G",metaDeleted:false,review:{connect:{oldId:"1961"}}}) { id } } `
    
MUTATIONS[613] = `mutation mutation613 { createReviewMeta(data: {oldId:"13141",metaType:"",metaName:"preTrackId",metaValue:"1581",metaDeleted:false,review:{connect:{oldId:"1971"}}}) { id } } `
    
MUTATIONS[614] = `mutation mutation614 { createReviewMeta(data: {oldId:"13151",metaType:"",metaName:"preAuthorId",metaValue:"A1C2OBFO4FHP7G",metaDeleted:false,review:{connect:{oldId:"1971"}}}) { id } } `
    
MUTATIONS[615] = `mutation mutation615 { createReviewMeta(data: {oldId:"13161",metaType:"",metaName:"preUserFavDemo",metaValue:"Rock",metaDeleted:false,review:{connect:{oldId:"1971"}}}) { id } } `
    
MUTATIONS[616] = `mutation mutation616 { createReviewMeta(data: {oldId:"13171",metaType:"",metaName:"preUserGenderDemo",metaValue:"female",metaDeleted:false,review:{connect:{oldId:"1971"}}}) { id } } `
    
MUTATIONS[617] = `mutation mutation617 { createReviewMeta(data: {oldId:"13181",metaType:"",metaName:"preUserAgeDemo",metaValue:"32",metaDeleted:false,review:{connect:{oldId:"1971"}}}) { id } } `
    
MUTATIONS[618] = `mutation mutation618 { createReviewMeta(data: {oldId:"13191",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"1971"}}}) { id } } `
    
MUTATIONS[619] = `mutation mutation619 { createReviewMeta(data: {oldId:"13201",metaType:"",metaName:"preTrackId",metaValue:"761",metaDeleted:false,review:{connect:{oldId:"1981"}}}) { id } } `
    
MUTATIONS[620] = `mutation mutation620 { createReviewMeta(data: {oldId:"13211",metaType:"",metaName:"preAuthorId",metaValue:"A1LVAHYYH7TGN2",metaDeleted:false,review:{connect:{oldId:"1981"}}}) { id } } `
    
MUTATIONS[621] = `mutation mutation621 { createReviewMeta(data: {oldId:"13221",metaType:"",metaName:"preUserFavDemo",metaValue:"Hip%20Hop",metaDeleted:false,review:{connect:{oldId:"1981"}}}) { id } } `
    
MUTATIONS[622] = `mutation mutation622 { createReviewMeta(data: {oldId:"13231",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"1981"}}}) { id } } `
    
MUTATIONS[623] = `mutation mutation623 { createReviewMeta(data: {oldId:"13241",metaType:"",metaName:"preUserAgeDemo",metaValue:"24",metaDeleted:false,review:{connect:{oldId:"1981"}}}) { id } } `
    
MUTATIONS[624] = `mutation mutation624 { createReviewMeta(data: {oldId:"13251",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"1981"}}}) { id } } `
    
MUTATIONS[625] = `mutation mutation625 { createReviewMeta(data: {oldId:"13261",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1971"}}}) { id } } `
    
MUTATIONS[626] = `mutation mutation626 { createReviewMeta(data: {oldId:"13271",metaType:"",metaName:"questionAnswer2",metaValue:"3",metaDeleted:false,review:{connect:{oldId:"1971"}}}) { id } } `
    
MUTATIONS[627] = `mutation mutation627 { createReviewMeta(data: {oldId:"13281",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1971"}}}) { id } } `
    
MUTATIONS[628] = `mutation mutation628 { createReviewMeta(data: {oldId:"13291",metaType:"",metaName:"questionAnswer1",metaValue:"Kanye%20mentions%20about%20glory%20in%20this%20song.%20He%20puts%20together%20all%20his%20feelings%20and%20what%20the%20true%20meaning%20of%20glory%20is%20to%20him.",metaDeleted:false,review:{connect:{oldId:"1971"}}}) { id } } `
    
MUTATIONS[629] = `mutation mutation629 { createReviewMeta(data: {oldId:"13301",metaType:"",metaName:"love_artist_0",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"1971"}}}) { id } } `
    
MUTATIONS[630] = `mutation mutation630 { createReviewMeta(data: {oldId:"13311",metaType:"",metaName:"assignmentId",metaValue:"3ZOTGHDK5IBSX1UCC9Y0UHCL3KSSOT",metaDeleted:false,review:{connect:{oldId:"1971"}}}) { id } } `
    
MUTATIONS[631] = `mutation mutation631 { createReviewMeta(data: {oldId:"13321",metaType:"",metaName:"hitId",metaValue:"356TQKY9XFX06RQARN6REKV6MCG78O",metaDeleted:false,review:{connect:{oldId:"1971"}}}) { id } } `
    
MUTATIONS[632] = `mutation mutation632 { createReviewMeta(data: {oldId:"13331",metaType:"",metaName:"workerId",metaValue:"A1C2OBFO4FHP7G",metaDeleted:false,review:{connect:{oldId:"1971"}}}) { id } } `
    
MUTATIONS[633] = `mutation mutation633 { createReviewMeta(data: {oldId:"13341",metaType:"",metaName:"questionType3",metaValue:"mult_choice",metaDeleted:false,review:{connect:{oldId:"1981"}}}) { id } } `
    
MUTATIONS[634] = `mutation mutation634 { createReviewMeta(data: {oldId:"13351",metaType:"",metaName:"questionAnswer3",metaValue:"3",metaDeleted:false,review:{connect:{oldId:"1981"}}}) { id } } `
    
MUTATIONS[635] = `mutation mutation635 { createReviewMeta(data: {oldId:"13361",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"1981"}}}) { id } } `
    
MUTATIONS[636] = `mutation mutation636 { createReviewMeta(data: {oldId:"13371",metaType:"",metaName:"questionAnswer2",metaValue:"6",metaDeleted:false,review:{connect:{oldId:"1981"}}}) { id } } `
    
MUTATIONS[637] = `mutation mutation637 { createReviewMeta(data: {oldId:"13381",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"1981"}}}) { id } } `
    
MUTATIONS[638] = `mutation mutation638 { createReviewMeta(data: {oldId:"13391",metaType:"",metaName:"questionAnswer1",metaValue:"Can%27t%20Tell%20Me%20Nothin%0D%0A%28Sulley%29If%20I%20were%20a%20rich%20man%0D%0AWith%20a%20million%20or%20two%0D%0A%28Mike%29I%27d%20live%20in%20a%20penthouse%0D%0AIn%20a%20room%2C%20with%20a%20view%0D%0A%28Sulley%29And%20if%20I%20were%20handsome%20%28No%20way%29%0D%0AIt%20could%20happen",metaDeleted:false,review:{connect:{oldId:"1981"}}}) { id } } `
    
MUTATIONS[639] = `mutation mutation639 { createReviewMeta(data: {oldId:"13401",metaType:"",metaName:"love_artist_0",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"1981"}}}) { id } } `
    
MUTATIONS[640] = `mutation mutation640 { createReviewMeta(data: {oldId:"13411",metaType:"",metaName:"assignmentId",metaValue:"384PI804XS17UK2TAOWP4GG35JI0SL",metaDeleted:false,review:{connect:{oldId:"1981"}}}) { id } } `
    
MUTATIONS[641] = `mutation mutation641 { createReviewMeta(data: {oldId:"13421",metaType:"",metaName:"hitId",metaValue:"3TZ0XG8CBUK4KAE36K4BSGMCH4E89F",metaDeleted:false,review:{connect:{oldId:"1981"}}}) { id } } `
    
MUTATIONS[642] = `mutation mutation642 { createReviewMeta(data: {oldId:"13431",metaType:"",metaName:"workerId",metaValue:"A1LVAHYYH7TGN2",metaDeleted:false,review:{connect:{oldId:"1981"}}}) { id } } `
    
MUTATIONS[643] = `mutation mutation643 { createReviewMeta(data: {oldId:"13441",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"1991"}}}) { id } } `
    
MUTATIONS[644] = `mutation mutation644 { createReviewMeta(data: {oldId:"13451",metaType:"",metaName:"preAuthorId",metaValue:"A2HSCKH5NKN5LP",metaDeleted:false,review:{connect:{oldId:"1991"}}}) { id } } `
    
MUTATIONS[645] = `mutation mutation645 { createReviewMeta(data: {oldId:"13461",metaType:"",metaName:"preUserFavDemo",metaValue:"Rock",metaDeleted:false,review:{connect:{oldId:"1991"}}}) { id } } `
    
MUTATIONS[646] = `mutation mutation646 { createReviewMeta(data: {oldId:"13471",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"1991"}}}) { id } } `
    
MUTATIONS[647] = `mutation mutation647 { createReviewMeta(data: {oldId:"13481",metaType:"",metaName:"preUserAgeDemo",metaValue:"28",metaDeleted:false,review:{connect:{oldId:"1991"}}}) { id } } `
    
MUTATIONS[648] = `mutation mutation648 { createReviewMeta(data: {oldId:"13491",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"1991"}}}) { id } } `
    
MUTATIONS[649] = `mutation mutation649 { createReviewMeta(data: {oldId:"13511",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2001"}}}) { id } } `
    
MUTATIONS[650] = `mutation mutation650 { createReviewMeta(data: {oldId:"13521",metaType:"",metaName:"preAuthorId",metaValue:"A3IPMSDYZPFVIL",metaDeleted:false,review:{connect:{oldId:"2001"}}}) { id } } `
    
MUTATIONS[651] = `mutation mutation651 { createReviewMeta(data: {oldId:"13531",metaType:"",metaName:"preUserFavDemo",metaValue:"Rock",metaDeleted:false,review:{connect:{oldId:"2001"}}}) { id } } `
    
MUTATIONS[652] = `mutation mutation652 { createReviewMeta(data: {oldId:"13541",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"2001"}}}) { id } } `
    
MUTATIONS[653] = `mutation mutation653 { createReviewMeta(data: {oldId:"13551",metaType:"",metaName:"preUserAgeDemo",metaValue:"39",metaDeleted:false,review:{connect:{oldId:"2001"}}}) { id } } `
    
MUTATIONS[654] = `mutation mutation654 { createReviewMeta(data: {oldId:"13561",metaType:"",metaName:"preUserExplicitDemo",metaValue:"off",metaDeleted:false,review:{connect:{oldId:"2001"}}}) { id } } `
    
MUTATIONS[655] = `mutation mutation655 { createReviewMeta(data: {oldId:"13571",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2011"}}}) { id } } `
    
MUTATIONS[656] = `mutation mutation656 { createReviewMeta(data: {oldId:"13581",metaType:"",metaName:"preAuthorId",metaValue:"A6Z1WJQAKC0PH",metaDeleted:false,review:{connect:{oldId:"2011"}}}) { id } } `
    
MUTATIONS[657] = `mutation mutation657 { createReviewMeta(data: {oldId:"13591",metaType:"",metaName:"preUserFavDemo",metaValue:"Pop",metaDeleted:false,review:{connect:{oldId:"2011"}}}) { id } } `
    
MUTATIONS[658] = `mutation mutation658 { createReviewMeta(data: {oldId:"13601",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"2011"}}}) { id } } `
    
MUTATIONS[659] = `mutation mutation659 { createReviewMeta(data: {oldId:"13611",metaType:"",metaName:"preUserAgeDemo",metaValue:"22",metaDeleted:false,review:{connect:{oldId:"2011"}}}) { id } } `
    
MUTATIONS[660] = `mutation mutation660 { createReviewMeta(data: {oldId:"13621",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2011"}}}) { id } } `
    
MUTATIONS[661] = `mutation mutation661 { createReviewMeta(data: {oldId:"13631",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"2011"}}}) { id } } `
    
MUTATIONS[662] = `mutation mutation662 { createReviewMeta(data: {oldId:"13641",metaType:"",metaName:"questionAnswer2",metaValue:"7",metaDeleted:false,review:{connect:{oldId:"2011"}}}) { id } } `
    
MUTATIONS[663] = `mutation mutation663 { createReviewMeta(data: {oldId:"13651",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"2011"}}}) { id } } `
    
MUTATIONS[664] = `mutation mutation664 { createReviewMeta(data: {oldId:"13661",metaType:"",metaName:"questionAnswer1",metaValue:"alked%20to%20a%20friend%20about%20this%20last%20night.%20He%20was%20saying%20that%20the%20sample%20combined%20with%20the%20C-Murder%20lines%20was%20advocating%20gang%20violence%2C%20while%20I%20feel%20the%20song%20has%20an%20entirely%20different%20message%2C%20a%20warning%20about%20a%20quick%20rise%20to%20fame%20and%20the%20media.%20I%20know%20kanye%20said%20the%20song%20was%20about%20a%20basketball%20player%2C%20but%20what%20do%20you%20think%20kanye%20was%20trying%20to%20say%20with%20the%20lynching%20sample%3F%20%5C%22strange%20fruit%20hanging%2C%20from%20the%20poplar%20tree%5C%22%2C0%2C%22%2CNULL%2C%222017-08-12%2003%3A40%3A49",metaDeleted:false,review:{connect:{oldId:"2011"}}}) { id } } `
    
MUTATIONS[665] = `mutation mutation665 { createReviewMeta(data: {oldId:"13671",metaType:"",metaName:"assignmentId",metaValue:"3EF8EXOTT1VE264LJDRBQK8QESAJ1Q",metaDeleted:false,review:{connect:{oldId:"2011"}}}) { id } } `
    
MUTATIONS[666] = `mutation mutation666 { createReviewMeta(data: {oldId:"13681",metaType:"",metaName:"hitId",metaValue:"3TZ0XG8CBUK4KAE36K4BSGMCH4E89F",metaDeleted:false,review:{connect:{oldId:"2011"}}}) { id } } `
    
MUTATIONS[667] = `mutation mutation667 { createReviewMeta(data: {oldId:"13691",metaType:"",metaName:"workerId",metaValue:"A6Z1WJQAKC0PH",metaDeleted:false,review:{connect:{oldId:"2011"}}}) { id } } `
    
MUTATIONS[668] = `mutation mutation668 { createReviewMeta(data: {oldId:"13701",metaType:"",metaName:"love_artist_0",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2011"}}}) { id } } `
    
MUTATIONS[669] = `mutation mutation669 { createReviewMeta(data: {oldId:"13711",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2021"}}}) { id } } `
    
MUTATIONS[670] = `mutation mutation670 { createReviewMeta(data: {oldId:"13721",metaType:"",metaName:"preAuthorId",metaValue:"A2TOWO0Q1ZJF4H",metaDeleted:false,review:{connect:{oldId:"2021"}}}) { id } } `
    
MUTATIONS[671] = `mutation mutation671 { createReviewMeta(data: {oldId:"13731",metaType:"",metaName:"preUserFavDemo",metaValue:"Piano",metaDeleted:false,review:{connect:{oldId:"2021"}}}) { id } } `
    
MUTATIONS[672] = `mutation mutation672 { createReviewMeta(data: {oldId:"13741",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"2021"}}}) { id } } `
    
MUTATIONS[673] = `mutation mutation673 { createReviewMeta(data: {oldId:"13751",metaType:"",metaName:"preUserAgeDemo",metaValue:"44",metaDeleted:false,review:{connect:{oldId:"2021"}}}) { id } } `
    
MUTATIONS[674] = `mutation mutation674 { createReviewMeta(data: {oldId:"13761",metaType:"",metaName:"preUserExplicitDemo",metaValue:"off",metaDeleted:false,review:{connect:{oldId:"2021"}}}) { id } } `
    
MUTATIONS[675] = `mutation mutation675 { createReviewMeta(data: {oldId:"13771",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2031"}}}) { id } } `
    
MUTATIONS[676] = `mutation mutation676 { createReviewMeta(data: {oldId:"13781",metaType:"",metaName:"preAuthorId",metaValue:"A2STPV2BBA882Y",metaDeleted:false,review:{connect:{oldId:"2031"}}}) { id } } `
    
MUTATIONS[677] = `mutation mutation677 { createReviewMeta(data: {oldId:"13791",metaType:"",metaName:"preUserFavDemo",metaValue:"Rock",metaDeleted:false,review:{connect:{oldId:"2031"}}}) { id } } `
    
MUTATIONS[678] = `mutation mutation678 { createReviewMeta(data: {oldId:"13801",metaType:"",metaName:"preUserGenderDemo",metaValue:"female",metaDeleted:false,review:{connect:{oldId:"2031"}}}) { id } } `
    
MUTATIONS[679] = `mutation mutation679 { createReviewMeta(data: {oldId:"13811",metaType:"",metaName:"preUserAgeDemo",metaValue:"30",metaDeleted:false,review:{connect:{oldId:"2031"}}}) { id } } `
    
MUTATIONS[680] = `mutation mutation680 { createReviewMeta(data: {oldId:"13821",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2031"}}}) { id } } `
    
MUTATIONS[681] = `mutation mutation681 { createReviewMeta(data: {oldId:"13831",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2041"}}}) { id } } `
    
MUTATIONS[682] = `mutation mutation682 { createReviewMeta(data: {oldId:"13841",metaType:"",metaName:"preAuthorId",metaValue:"A149A52X81HLVJ",metaDeleted:false,review:{connect:{oldId:"2041"}}}) { id } } `
    
MUTATIONS[683] = `mutation mutation683 { createReviewMeta(data: {oldId:"13851",metaType:"",metaName:"preUserFavDemo",metaValue:"Rock",metaDeleted:false,review:{connect:{oldId:"2041"}}}) { id } } `
    
MUTATIONS[684] = `mutation mutation684 { createReviewMeta(data: {oldId:"13861",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"2041"}}}) { id } } `
    
MUTATIONS[685] = `mutation mutation685 { createReviewMeta(data: {oldId:"13871",metaType:"",metaName:"preUserAgeDemo",metaValue:"22",metaDeleted:false,review:{connect:{oldId:"2041"}}}) { id } } `
    
MUTATIONS[686] = `mutation mutation686 { createReviewMeta(data: {oldId:"13881",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2041"}}}) { id } } `
    
MUTATIONS[687] = `mutation mutation687 { createReviewMeta(data: {oldId:"13891",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"2041"}}}) { id } } `
    
MUTATIONS[688] = `mutation mutation688 { createReviewMeta(data: {oldId:"13901",metaType:"",metaName:"questionAnswer2",metaValue:"3",metaDeleted:false,review:{connect:{oldId:"2041"}}}) { id } } `
    
MUTATIONS[689] = `mutation mutation689 { createReviewMeta(data: {oldId:"13911",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"2041"}}}) { id } } `
    
MUTATIONS[690] = `mutation mutation690 { createReviewMeta(data: {oldId:"13921",metaType:"",metaName:"questionAnswer1",metaValue:"I%20do%20believe%20Kanye%20West%20is%20referring%20to%20someone%20extremely%20close%20to%20him%2C%20who%20also%20helped%20him%20through%20some%20very%20troubling%20times.%20I%20think%20he%27s%20trying%20to%20convey%20the%20importance%20of%20idols%20and%20co-dependence.",metaDeleted:false,review:{connect:{oldId:"2041"}}}) { id } } `
    
MUTATIONS[691] = `mutation mutation691 { createReviewMeta(data: {oldId:"13931",metaType:"",metaName:"assignmentId",metaValue:"3U5NZHP4LR2LSSSXGFZGF3A94GDPHW",metaDeleted:false,review:{connect:{oldId:"2041"}}}) { id } } `
    
MUTATIONS[692] = `mutation mutation692 { createReviewMeta(data: {oldId:"13941",metaType:"",metaName:"hitId",metaValue:"3TZ0XG8CBUK4KAE36K4BSGMCH4E89F",metaDeleted:false,review:{connect:{oldId:"2041"}}}) { id } } `
    
MUTATIONS[693] = `mutation mutation693 { createReviewMeta(data: {oldId:"13951",metaType:"",metaName:"workerId",metaValue:"A149A52X81HLVJ",metaDeleted:false,review:{connect:{oldId:"2041"}}}) { id } } `
    
MUTATIONS[694] = `mutation mutation694 { createReviewMeta(data: {oldId:"13961",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2051"}}}) { id } } `
    
MUTATIONS[695] = `mutation mutation695 { createReviewMeta(data: {oldId:"13971",metaType:"",metaName:"preAuthorId",metaValue:"AQ4NUYZWCDZ73",metaDeleted:false,review:{connect:{oldId:"2051"}}}) { id } } `
    
MUTATIONS[696] = `mutation mutation696 { createReviewMeta(data: {oldId:"13981",metaType:"",metaName:"preUserFavDemo",metaValue:"Folk",metaDeleted:false,review:{connect:{oldId:"2051"}}}) { id } } `
    
MUTATIONS[697] = `mutation mutation697 { createReviewMeta(data: {oldId:"13991",metaType:"",metaName:"preUserGenderDemo",metaValue:"female",metaDeleted:false,review:{connect:{oldId:"2051"}}}) { id } } `
    
MUTATIONS[698] = `mutation mutation698 { createReviewMeta(data: {oldId:"14001",metaType:"",metaName:"preUserAgeDemo",metaValue:"23",metaDeleted:false,review:{connect:{oldId:"2051"}}}) { id } } `
    
MUTATIONS[699] = `mutation mutation699 { createReviewMeta(data: {oldId:"14011",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2051"}}}) { id } } `
    
MUTATIONS[700] = `mutation mutation700 { createReviewMeta(data: {oldId:"14021",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"2051"}}}) { id } } `
    
MUTATIONS[701] = `mutation mutation701 { createReviewMeta(data: {oldId:"14031",metaType:"",metaName:"questionAnswer2",metaValue:"9",metaDeleted:false,review:{connect:{oldId:"2051"}}}) { id } } `
    
MUTATIONS[702] = `mutation mutation702 { createReviewMeta(data: {oldId:"14041",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"2051"}}}) { id } } `
    
MUTATIONS[703] = `mutation mutation703 { createReviewMeta(data: {oldId:"14051",metaType:"",metaName:"questionAnswer1",metaValue:"He%20has%20finally%20%5C%22made%20it%2C%5C%22%20he%27s%20famous%20although%20he%27s%20come%20from%20nothing.%20He%27s%20thanking%20Jay%20Z%20for%20mentoring%20him%20and%20acting%20like%20his%20%5C%22big%20brother%5C",metaDeleted:false,review:{connect:{oldId:"2051"}}}) { id } } `
    
MUTATIONS[704] = `mutation mutation704 { createReviewMeta(data: {oldId:"14061",metaType:"",metaName:"love_artist_0",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2051"}}}) { id } } `
    
MUTATIONS[705] = `mutation mutation705 { createReviewMeta(data: {oldId:"14071",metaType:"",metaName:"assignmentId",metaValue:"30ZX6P7VF8VLRRMH2HRPV3IV6YP2JR",metaDeleted:false,review:{connect:{oldId:"2051"}}}) { id } } `
    
MUTATIONS[706] = `mutation mutation706 { createReviewMeta(data: {oldId:"14081",metaType:"",metaName:"hitId",metaValue:"3TZ0XG8CBUK4KAE36K4BSGMCH4E89F",metaDeleted:false,review:{connect:{oldId:"2051"}}}) { id } } `
    
MUTATIONS[707] = `mutation mutation707 { createReviewMeta(data: {oldId:"14091",metaType:"",metaName:"workerId",metaValue:"AQ4NUYZWCDZ73",metaDeleted:false,review:{connect:{oldId:"2051"}}}) { id } } `
    
MUTATIONS[708] = `mutation mutation708 { createReviewMeta(data: {oldId:"14101",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2061"}}}) { id } } `
    
MUTATIONS[709] = `mutation mutation709 { createReviewMeta(data: {oldId:"14111",metaType:"",metaName:"preAuthorId",metaValue:"AXCPRXO08DFAH",metaDeleted:false,review:{connect:{oldId:"2061"}}}) { id } } `
    
MUTATIONS[710] = `mutation mutation710 { createReviewMeta(data: {oldId:"14121",metaType:"",metaName:"preUserFavDemo",metaValue:"Piano",metaDeleted:false,review:{connect:{oldId:"2061"}}}) { id } } `
    
MUTATIONS[711] = `mutation mutation711 { createReviewMeta(data: {oldId:"14131",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"2061"}}}) { id } } `
    
MUTATIONS[712] = `mutation mutation712 { createReviewMeta(data: {oldId:"14141",metaType:"",metaName:"preUserAgeDemo",metaValue:"23",metaDeleted:false,review:{connect:{oldId:"2061"}}}) { id } } `
    
MUTATIONS[713] = `mutation mutation713 { createReviewMeta(data: {oldId:"14151",metaType:"",metaName:"preUserExplicitDemo",metaValue:"off",metaDeleted:false,review:{connect:{oldId:"2061"}}}) { id } } `
    
MUTATIONS[714] = `mutation mutation714 { createReviewMeta(data: {oldId:"14161",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2071"}}}) { id } } `
    
MUTATIONS[715] = `mutation mutation715 { createReviewMeta(data: {oldId:"14171",metaType:"",metaName:"preAuthorId",metaValue:"A2URMYFRQM2WHN",metaDeleted:false,review:{connect:{oldId:"2071"}}}) { id } } `
    
MUTATIONS[716] = `mutation mutation716 { createReviewMeta(data: {oldId:"14181",metaType:"",metaName:"preUserFavDemo",metaValue:"Pop",metaDeleted:false,review:{connect:{oldId:"2071"}}}) { id } } `
    
MUTATIONS[717] = `mutation mutation717 { createReviewMeta(data: {oldId:"14191",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"2071"}}}) { id } } `
    
MUTATIONS[718] = `mutation mutation718 { createReviewMeta(data: {oldId:"14201",metaType:"",metaName:"preUserAgeDemo",metaValue:"28",metaDeleted:false,review:{connect:{oldId:"2071"}}}) { id } } `
    
MUTATIONS[719] = `mutation mutation719 { createReviewMeta(data: {oldId:"14211",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2071"}}}) { id } } `
    
MUTATIONS[720] = `mutation mutation720 { createReviewMeta(data: {oldId:"14221",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"2071"}}}) { id } } `
    
MUTATIONS[721] = `mutation mutation721 { createReviewMeta(data: {oldId:"14231",metaType:"",metaName:"questionAnswer2",metaValue:"8",metaDeleted:false,review:{connect:{oldId:"2071"}}}) { id } } `
    
MUTATIONS[722] = `mutation mutation722 { createReviewMeta(data: {oldId:"14241",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"2071"}}}) { id } } `
    
MUTATIONS[723] = `mutation mutation723 { createReviewMeta(data: {oldId:"14251",metaType:"",metaName:"questionAnswer1",metaValue:"every%20thing%20happen%20nice%20way.and%20he%20convey%20the%20message%20to%20all%20his%20fans%20i%20think.%20its%20really%20nice%20music%20playback%20singer",metaDeleted:false,review:{connect:{oldId:"2071"}}}) { id } } `
    
MUTATIONS[724] = `mutation mutation724 { createReviewMeta(data: {oldId:"14261",metaType:"",metaName:"assignmentId",metaValue:"36AHBNMV1RCYPQFWL6C919ONGTNYDQ",metaDeleted:false,review:{connect:{oldId:"2071"}}}) { id } } `
    
MUTATIONS[725] = `mutation mutation725 { createReviewMeta(data: {oldId:"14271",metaType:"",metaName:"hitId",metaValue:"3TZ0XG8CBUK4KAE36K4BSGMCH4E89F",metaDeleted:false,review:{connect:{oldId:"2071"}}}) { id } } `
    
MUTATIONS[726] = `mutation mutation726 { createReviewMeta(data: {oldId:"14281",metaType:"",metaName:"workerId",metaValue:"A2URMYFRQM2WHN",metaDeleted:false,review:{connect:{oldId:"2071"}}}) { id } } `
    
MUTATIONS[727] = `mutation mutation727 { createReviewMeta(data: {oldId:"14291",metaType:"",metaName:"love_artist_0",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2071"}}}) { id } } `
    
MUTATIONS[728] = `mutation mutation728 { createReviewMeta(data: {oldId:"14301",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2081"}}}) { id } } `
    
MUTATIONS[729] = `mutation mutation729 { createReviewMeta(data: {oldId:"14311",metaType:"",metaName:"preAuthorId",metaValue:"A1CY44CGMVAHKT",metaDeleted:false,review:{connect:{oldId:"2081"}}}) { id } } `
    
MUTATIONS[730] = `mutation mutation730 { createReviewMeta(data: {oldId:"14321",metaType:"",metaName:"preUserFavDemo",metaValue:"Punk",metaDeleted:false,review:{connect:{oldId:"2081"}}}) { id } } `
    
MUTATIONS[731] = `mutation mutation731 { createReviewMeta(data: {oldId:"14331",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"2081"}}}) { id } } `
    
MUTATIONS[732] = `mutation mutation732 { createReviewMeta(data: {oldId:"14341",metaType:"",metaName:"preUserAgeDemo",metaValue:"28",metaDeleted:false,review:{connect:{oldId:"2081"}}}) { id } } `
    
MUTATIONS[733] = `mutation mutation733 { createReviewMeta(data: {oldId:"14351",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2081"}}}) { id } } `
    
MUTATIONS[734] = `mutation mutation734 { createReviewMeta(data: {oldId:"14361",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"2081"}}}) { id } } `
    
MUTATIONS[735] = `mutation mutation735 { createReviewMeta(data: {oldId:"14371",metaType:"",metaName:"questionAnswer2",metaValue:"8",metaDeleted:false,review:{connect:{oldId:"2081"}}}) { id } } `
    
MUTATIONS[736] = `mutation mutation736 { createReviewMeta(data: {oldId:"14381",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"2081"}}}) { id } } `
    
MUTATIONS[737] = `mutation mutation737 { createReviewMeta(data: {oldId:"14391",metaType:"",metaName:"questionAnswer1",metaValue:"He%20is%20talking%20about%20his%20mentor%2C%20and%20how%20he%20has%20made%20a%20big%20impact%20in%20his%20life.%20%20He%20talks%20about%20how%20his%20%5C%22big%20brother%2C%5C%22%20even%20helped%20him%20get%20a%20house%20for%20his%20mother%2C%20and%20is%20talking%20about%20how%20he%20has%20to%20outshine%20his%20mentor%20even%20though%20he%20helped%20him%20get%20to%20where%20he%20is.",metaDeleted:false,review:{connect:{oldId:"2081"}}}) { id } } `
    
MUTATIONS[738] = `mutation mutation738 { createReviewMeta(data: {oldId:"14401",metaType:"",metaName:"love_artist_0",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2081"}}}) { id } } `
    
MUTATIONS[739] = `mutation mutation739 { createReviewMeta(data: {oldId:"14411",metaType:"",metaName:"assignmentId",metaValue:"3SBEHTYCWN3FX1VIDKDKS6408YVYIS",metaDeleted:false,review:{connect:{oldId:"2081"}}}) { id } } `
    
MUTATIONS[740] = `mutation mutation740 { createReviewMeta(data: {oldId:"14421",metaType:"",metaName:"hitId",metaValue:"3TZ0XG8CBUK4KAE36K4BSGMCH4E89F",metaDeleted:false,review:{connect:{oldId:"2081"}}}) { id } } `
    
MUTATIONS[741] = `mutation mutation741 { createReviewMeta(data: {oldId:"14431",metaType:"",metaName:"workerId",metaValue:"A1CY44CGMVAHKT",metaDeleted:false,review:{connect:{oldId:"2081"}}}) { id } } `
    
MUTATIONS[742] = `mutation mutation742 { createReviewMeta(data: {oldId:"14441",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2091"}}}) { id } } `
    
MUTATIONS[743] = `mutation mutation743 { createReviewMeta(data: {oldId:"14451",metaType:"",metaName:"preAuthorId",metaValue:"A3BH8DUKASYYX4",metaDeleted:false,review:{connect:{oldId:"2091"}}}) { id } } `
    
MUTATIONS[744] = `mutation mutation744 { createReviewMeta(data: {oldId:"14461",metaType:"",metaName:"preUserFavDemo",metaValue:"Rock",metaDeleted:false,review:{connect:{oldId:"2091"}}}) { id } } `
    
MUTATIONS[745] = `mutation mutation745 { createReviewMeta(data: {oldId:"14471",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"2091"}}}) { id } } `
    
MUTATIONS[746] = `mutation mutation746 { createReviewMeta(data: {oldId:"14481",metaType:"",metaName:"preUserAgeDemo",metaValue:"30",metaDeleted:false,review:{connect:{oldId:"2091"}}}) { id } } `
    
MUTATIONS[747] = `mutation mutation747 { createReviewMeta(data: {oldId:"14491",metaType:"",metaName:"preUserExplicitDemo",metaValue:"off",metaDeleted:false,review:{connect:{oldId:"2091"}}}) { id } } `
    
MUTATIONS[748] = `mutation mutation748 { createReviewMeta(data: {oldId:"14501",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"2091"}}}) { id } } `
    
MUTATIONS[749] = `mutation mutation749 { createReviewMeta(data: {oldId:"14511",metaType:"",metaName:"questionAnswer2",metaValue:"1",metaDeleted:false,review:{connect:{oldId:"2091"}}}) { id } } `
    
MUTATIONS[750] = `mutation mutation750 { createReviewMeta(data: {oldId:"14521",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"2091"}}}) { id } } `
    
MUTATIONS[751] = `mutation mutation751 { createReviewMeta(data: {oldId:"14531",metaType:"",metaName:"questionAnswer1",metaValue:"I%20have%20absolutely%20no%20clue%20what%20Kanye%20is%20trying%20to%20convey%20in%20this%20song.%20%20I%20have%20a%20hard%20time%20determining%20what%20he%20is%20saying.%20",metaDeleted:false,review:{connect:{oldId:"2091"}}}) { id } } `
    
MUTATIONS[752] = `mutation mutation752 { createReviewMeta(data: {oldId:"14541",metaType:"",metaName:"assignmentId",metaValue:"39L1G8WVWQR3HS2WGSZOADR1IVQ13Y",metaDeleted:false,review:{connect:{oldId:"2091"}}}) { id } } `
    
MUTATIONS[753] = `mutation mutation753 { createReviewMeta(data: {oldId:"14551",metaType:"",metaName:"hitId",metaValue:"3TZ0XG8CBUK4KAE36K4BSGMCH4E89F",metaDeleted:false,review:{connect:{oldId:"2091"}}}) { id } } `
    
MUTATIONS[754] = `mutation mutation754 { createReviewMeta(data: {oldId:"14561",metaType:"",metaName:"workerId",metaValue:"A3BH8DUKASYYX4",metaDeleted:false,review:{connect:{oldId:"2091"}}}) { id } } `
    
MUTATIONS[755] = `mutation mutation755 { createReviewMeta(data: {oldId:"14571",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2101"}}}) { id } } `
    
MUTATIONS[756] = `mutation mutation756 { createReviewMeta(data: {oldId:"14581",metaType:"",metaName:"preAuthorId",metaValue:"AEXA99JNAXM2M",metaDeleted:false,review:{connect:{oldId:"2101"}}}) { id } } `
    
MUTATIONS[757] = `mutation mutation757 { createReviewMeta(data: {oldId:"14591",metaType:"",metaName:"preUserFavDemo",metaValue:"Folk",metaDeleted:false,review:{connect:{oldId:"2101"}}}) { id } } `
    
MUTATIONS[758] = `mutation mutation758 { createReviewMeta(data: {oldId:"14601",metaType:"",metaName:"preUserGenderDemo",metaValue:"female",metaDeleted:false,review:{connect:{oldId:"2101"}}}) { id } } `
    
MUTATIONS[759] = `mutation mutation759 { createReviewMeta(data: {oldId:"14611",metaType:"",metaName:"preUserAgeDemo",metaValue:"21",metaDeleted:false,review:{connect:{oldId:"2101"}}}) { id } } `
    
MUTATIONS[760] = `mutation mutation760 { createReviewMeta(data: {oldId:"14621",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2101"}}}) { id } } `
    
MUTATIONS[761] = `mutation mutation761 { createReviewMeta(data: {oldId:"14631",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2111"}}}) { id } } `
    
MUTATIONS[762] = `mutation mutation762 { createReviewMeta(data: {oldId:"14641",metaType:"",metaName:"preAuthorId",metaValue:"A1H18YUIEFRLLR",metaDeleted:false,review:{connect:{oldId:"2111"}}}) { id } } `
    
MUTATIONS[763] = `mutation mutation763 { createReviewMeta(data: {oldId:"14651",metaType:"",metaName:"preUserFavDemo",metaValue:"Hip%20Hop",metaDeleted:false,review:{connect:{oldId:"2111"}}}) { id } } `
    
MUTATIONS[764] = `mutation mutation764 { createReviewMeta(data: {oldId:"14661",metaType:"",metaName:"preUserGenderDemo",metaValue:"female",metaDeleted:false,review:{connect:{oldId:"2111"}}}) { id } } `
    
MUTATIONS[765] = `mutation mutation765 { createReviewMeta(data: {oldId:"14671",metaType:"",metaName:"preUserAgeDemo",metaValue:"28",metaDeleted:false,review:{connect:{oldId:"2111"}}}) { id } } `
    
MUTATIONS[766] = `mutation mutation766 { createReviewMeta(data: {oldId:"14681",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2111"}}}) { id } } `
    
MUTATIONS[767] = `mutation mutation767 { createReviewMeta(data: {oldId:"14691",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"2101"}}}) { id } } `
    
MUTATIONS[768] = `mutation mutation768 { createReviewMeta(data: {oldId:"14701",metaType:"",metaName:"questionAnswer2",metaValue:"5",metaDeleted:false,review:{connect:{oldId:"2101"}}}) { id } } `
    
MUTATIONS[769] = `mutation mutation769 { createReviewMeta(data: {oldId:"14711",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"2101"}}}) { id } } `
    
MUTATIONS[770] = `mutation mutation770 { createReviewMeta(data: {oldId:"14721",metaType:"",metaName:"questionAnswer1",metaValue:"Kanye%20is%20trying%20to%20convey%20his%20relationship%20with%20Jay-Z%2C%20who%20he%20looks%20up%20to%20like%20a%20big%20brother.%20Kanye%20is%20comparing%20him%20to%20Notorious%20B.I.G.",metaDeleted:false,review:{connect:{oldId:"2101"}}}) { id } } `
    
MUTATIONS[771] = `mutation mutation771 { createReviewMeta(data: {oldId:"14731",metaType:"",metaName:"love_artist_0",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2101"}}}) { id } } `
    
MUTATIONS[772] = `mutation mutation772 { createReviewMeta(data: {oldId:"14741",metaType:"",metaName:"assignmentId",metaValue:"386CSBG1OZMQVF9VK9N1IHBT0YK6Q4",metaDeleted:false,review:{connect:{oldId:"2101"}}}) { id } } `
    
MUTATIONS[773] = `mutation mutation773 { createReviewMeta(data: {oldId:"14751",metaType:"",metaName:"hitId",metaValue:"3TZ0XG8CBUK4KAE36K4BSGMCH4E89F",metaDeleted:false,review:{connect:{oldId:"2101"}}}) { id } } `
    
MUTATIONS[774] = `mutation mutation774 { createReviewMeta(data: {oldId:"14761",metaType:"",metaName:"workerId",metaValue:"AEXA99JNAXM2M",metaDeleted:false,review:{connect:{oldId:"2101"}}}) { id } } `
    
MUTATIONS[775] = `mutation mutation775 { createReviewMeta(data: {oldId:"14771",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"2111"}}}) { id } } `
    
MUTATIONS[776] = `mutation mutation776 { createReviewMeta(data: {oldId:"14781",metaType:"",metaName:"questionAnswer2",metaValue:"3",metaDeleted:false,review:{connect:{oldId:"2111"}}}) { id } } `
    
MUTATIONS[777] = `mutation mutation777 { createReviewMeta(data: {oldId:"14791",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"2111"}}}) { id } } `
    
MUTATIONS[778] = `mutation mutation778 { createReviewMeta(data: {oldId:"14801",metaType:"",metaName:"questionAnswer1",metaValue:"Kanye%20West%20is%20trying%20to%20convey%20through%20the%20song%20Big%20Brother%20his%20relationship%20with%20Jay-Z.%20How%20they%20got%20to%20where%20they%20are%20now%20and%20how%20he%20admires%20him.%20",metaDeleted:false,review:{connect:{oldId:"2111"}}}) { id } } `
    
MUTATIONS[779] = `mutation mutation779 { createReviewMeta(data: {oldId:"14811",metaType:"",metaName:"love_artist_0",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2111"}}}) { id } } `
    
MUTATIONS[780] = `mutation mutation780 { createReviewMeta(data: {oldId:"14821",metaType:"",metaName:"assignmentId",metaValue:"3QXNC7EIPIVPP56U1IWYNLBDDVT09A",metaDeleted:false,review:{connect:{oldId:"2111"}}}) { id } } `
    
MUTATIONS[781] = `mutation mutation781 { createReviewMeta(data: {oldId:"14831",metaType:"",metaName:"hitId",metaValue:"3TZ0XG8CBUK4KAE36K4BSGMCH4E89F",metaDeleted:false,review:{connect:{oldId:"2111"}}}) { id } } `
    
MUTATIONS[782] = `mutation mutation782 { createReviewMeta(data: {oldId:"14841",metaType:"",metaName:"workerId",metaValue:"A1H18YUIEFRLLR",metaDeleted:false,review:{connect:{oldId:"2111"}}}) { id } } `
    
MUTATIONS[783] = `mutation mutation783 { createReviewMeta(data: {oldId:"14851",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2121"}}}) { id } } `
    
MUTATIONS[784] = `mutation mutation784 { createReviewMeta(data: {oldId:"14861",metaType:"",metaName:"preAuthorId",metaValue:"A2HV9CYJH2IQYE",metaDeleted:false,review:{connect:{oldId:"2121"}}}) { id } } `
    
MUTATIONS[785] = `mutation mutation785 { createReviewMeta(data: {oldId:"14871",metaType:"",metaName:"preUserFavDemo",metaValue:"Pop",metaDeleted:false,review:{connect:{oldId:"2121"}}}) { id } } `
    
MUTATIONS[786] = `mutation mutation786 { createReviewMeta(data: {oldId:"14881",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"2121"}}}) { id } } `
    
MUTATIONS[787] = `mutation mutation787 { createReviewMeta(data: {oldId:"14891",metaType:"",metaName:"preUserAgeDemo",metaValue:"31",metaDeleted:false,review:{connect:{oldId:"2121"}}}) { id } } `
    
MUTATIONS[788] = `mutation mutation788 { createReviewMeta(data: {oldId:"14901",metaType:"",metaName:"preUserExplicitDemo",metaValue:"off",metaDeleted:false,review:{connect:{oldId:"2121"}}}) { id } } `
    
MUTATIONS[789] = `mutation mutation789 { createReviewMeta(data: {oldId:"14911",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2131"}}}) { id } } `
    
MUTATIONS[790] = `mutation mutation790 { createReviewMeta(data: {oldId:"14921",metaType:"",metaName:"preAuthorId",metaValue:"A1IM8G6UNAGQ7S",metaDeleted:false,review:{connect:{oldId:"2131"}}}) { id } } `
    
MUTATIONS[791] = `mutation mutation791 { createReviewMeta(data: {oldId:"14931",metaType:"",metaName:"preUserFavDemo",metaValue:"Pop",metaDeleted:false,review:{connect:{oldId:"2131"}}}) { id } } `
    
MUTATIONS[792] = `mutation mutation792 { createReviewMeta(data: {oldId:"14941",metaType:"",metaName:"preUserGenderDemo",metaValue:"female",metaDeleted:false,review:{connect:{oldId:"2131"}}}) { id } } `
    
MUTATIONS[793] = `mutation mutation793 { createReviewMeta(data: {oldId:"14951",metaType:"",metaName:"preUserAgeDemo",metaValue:"21",metaDeleted:false,review:{connect:{oldId:"2131"}}}) { id } } `
    
MUTATIONS[794] = `mutation mutation794 { createReviewMeta(data: {oldId:"14961",metaType:"",metaName:"preUserExplicitDemo",metaValue:"off",metaDeleted:false,review:{connect:{oldId:"2131"}}}) { id } } `
    
MUTATIONS[795] = `mutation mutation795 { createReviewMeta(data: {oldId:"14971",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"2131"}}}) { id } } `
    
MUTATIONS[796] = `mutation mutation796 { createReviewMeta(data: {oldId:"14981",metaType:"",metaName:"questionAnswer2",metaValue:"1",metaDeleted:false,review:{connect:{oldId:"2131"}}}) { id } } `
    
MUTATIONS[797] = `mutation mutation797 { createReviewMeta(data: {oldId:"14991",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"2131"}}}) { id } } `
    
MUTATIONS[798] = `mutation mutation798 { createReviewMeta(data: {oldId:"15001",metaType:"",metaName:"questionAnswer1",metaValue:"yes%20%20Kanye%20Omari%20West%20%28/%u02C8k%u0251%u02D0nje%u026A/%3B%20born%20June%208%2C%201977%29%20is%20an%20American%20rapper%2C%20songwriter%2C%20....%20At%20age%20thirteen%2C%20West%20wrote%20a%20rap%20song%20called%20%5C%22Green%20Eggs%20and%20Ham%5C%22%20and%20began%20to%20....%20to%20West%20%5C%22all%20the%20better%20artists%20have%20expressed%20what%20they%20were%20going%20through%5C%22.%20....%20Feeling%20his%20emotions%20could%20not%20be%20conveyed%20through%20rapping%2C%20West%20...",metaDeleted:false,review:{connect:{oldId:"2131"}}}) { id } } `
    
MUTATIONS[799] = `mutation mutation799 { createReviewMeta(data: {oldId:"15011",metaType:"",metaName:"love_artist_0",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2131"}}}) { id } } `
    
MUTATIONS[800] = `mutation mutation800 { createReviewMeta(data: {oldId:"15021",metaType:"",metaName:"assignmentId",metaValue:"3A1PQ49WVHHIB09VVDOQE7SB1081H5",metaDeleted:false,review:{connect:{oldId:"2131"}}}) { id } } `
    
MUTATIONS[801] = `mutation mutation801 { createReviewMeta(data: {oldId:"15031",metaType:"",metaName:"hitId",metaValue:"3TZ0XG8CBUK4KAE36K4BSGMCH4E89F",metaDeleted:false,review:{connect:{oldId:"2131"}}}) { id } } `
    
MUTATIONS[802] = `mutation mutation802 { createReviewMeta(data: {oldId:"15041",metaType:"",metaName:"workerId",metaValue:"A1IM8G6UNAGQ7S",metaDeleted:false,review:{connect:{oldId:"2131"}}}) { id } } `
    
MUTATIONS[803] = `mutation mutation803 { createReviewMeta(data: {oldId:"15051",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2141"}}}) { id } } `
    
MUTATIONS[804] = `mutation mutation804 { createReviewMeta(data: {oldId:"15061",metaType:"",metaName:"preAuthorId",metaValue:"A1EVW13BQQMRRO",metaDeleted:false,review:{connect:{oldId:"2141"}}}) { id } } `
    
MUTATIONS[805] = `mutation mutation805 { createReviewMeta(data: {oldId:"15071",metaType:"",metaName:"preUserFavDemo",metaValue:"Rock",metaDeleted:false,review:{connect:{oldId:"2141"}}}) { id } } `
    
MUTATIONS[806] = `mutation mutation806 { createReviewMeta(data: {oldId:"15081",metaType:"",metaName:"preUserGenderDemo",metaValue:"female",metaDeleted:false,review:{connect:{oldId:"2141"}}}) { id } } `
    
MUTATIONS[807] = `mutation mutation807 { createReviewMeta(data: {oldId:"15091",metaType:"",metaName:"preUserAgeDemo",metaValue:"47",metaDeleted:false,review:{connect:{oldId:"2141"}}}) { id } } `
    
MUTATIONS[808] = `mutation mutation808 { createReviewMeta(data: {oldId:"15101",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2141"}}}) { id } } `
    
MUTATIONS[809] = `mutation mutation809 { createReviewMeta(data: {oldId:"15111",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"2141"}}}) { id } } `
    
MUTATIONS[810] = `mutation mutation810 { createReviewMeta(data: {oldId:"15121",metaType:"",metaName:"questionAnswer2",metaValue:"5",metaDeleted:false,review:{connect:{oldId:"2141"}}}) { id } } `
    
MUTATIONS[811] = `mutation mutation811 { createReviewMeta(data: {oldId:"15131",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"2141"}}}) { id } } `
    
MUTATIONS[812] = `mutation mutation812 { createReviewMeta(data: {oldId:"15141",metaType:"",metaName:"questionAnswer1",metaValue:"Big%20Brother%20is%20Jay-Z.%20%20The%20song%20is%20about%20Kanye%27s%20mentoring%20from%20Jay%20and%20his%20subsequent%20rise%20to%20fame%20over%20Jay.%20%20",metaDeleted:false,review:{connect:{oldId:"2141"}}}) { id } } `
    
MUTATIONS[813] = `mutation mutation813 { createReviewMeta(data: {oldId:"15151",metaType:"",metaName:"love_artist_0",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2141"}}}) { id } } `
    
MUTATIONS[814] = `mutation mutation814 { createReviewMeta(data: {oldId:"15161",metaType:"",metaName:"assignmentId",metaValue:"3Z2R0DQ0JHEDGB0POGGYYN531QTE2I",metaDeleted:false,review:{connect:{oldId:"2141"}}}) { id } } `
    
MUTATIONS[815] = `mutation mutation815 { createReviewMeta(data: {oldId:"15171",metaType:"",metaName:"hitId",metaValue:"3TZ0XG8CBUK4KAE36K4BSGMCH4E89F",metaDeleted:false,review:{connect:{oldId:"2141"}}}) { id } } `
    
MUTATIONS[816] = `mutation mutation816 { createReviewMeta(data: {oldId:"15181",metaType:"",metaName:"workerId",metaValue:"A1EVW13BQQMRRO",metaDeleted:false,review:{connect:{oldId:"2141"}}}) { id } } `
    
MUTATIONS[817] = `mutation mutation817 { createReviewMeta(data: {oldId:"15191",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2151"}}}) { id } } `
    
MUTATIONS[818] = `mutation mutation818 { createReviewMeta(data: {oldId:"15201",metaType:"",metaName:"preAuthorId",metaValue:"A1R1QAFW73B8CD",metaDeleted:false,review:{connect:{oldId:"2151"}}}) { id } } `
    
MUTATIONS[819] = `mutation mutation819 { createReviewMeta(data: {oldId:"15211",metaType:"",metaName:"preUserFavDemo",metaValue:"Metal",metaDeleted:false,review:{connect:{oldId:"2151"}}}) { id } } `
    
MUTATIONS[820] = `mutation mutation820 { createReviewMeta(data: {oldId:"15221",metaType:"",metaName:"preUserGenderDemo",metaValue:"female",metaDeleted:false,review:{connect:{oldId:"2151"}}}) { id } } `
    
MUTATIONS[821] = `mutation mutation821 { createReviewMeta(data: {oldId:"15231",metaType:"",metaName:"preUserAgeDemo",metaValue:"26",metaDeleted:false,review:{connect:{oldId:"2151"}}}) { id } } `
    
MUTATIONS[822] = `mutation mutation822 { createReviewMeta(data: {oldId:"15241",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2151"}}}) { id } } `
    
MUTATIONS[823] = `mutation mutation823 { createReviewMeta(data: {oldId:"15251",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2161"}}}) { id } } `
    
MUTATIONS[824] = `mutation mutation824 { createReviewMeta(data: {oldId:"15261",metaType:"",metaName:"preAuthorId",metaValue:"A2G7N0X0PNX0EE",metaDeleted:false,review:{connect:{oldId:"2161"}}}) { id } } `
    
MUTATIONS[825] = `mutation mutation825 { createReviewMeta(data: {oldId:"15271",metaType:"",metaName:"preUserFavDemo",metaValue:"Hip%20Hop",metaDeleted:false,review:{connect:{oldId:"2161"}}}) { id } } `
    
MUTATIONS[826] = `mutation mutation826 { createReviewMeta(data: {oldId:"15281",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"2161"}}}) { id } } `
    
MUTATIONS[827] = `mutation mutation827 { createReviewMeta(data: {oldId:"15291",metaType:"",metaName:"preUserAgeDemo",metaValue:"28",metaDeleted:false,review:{connect:{oldId:"2161"}}}) { id } } `
    
MUTATIONS[828] = `mutation mutation828 { createReviewMeta(data: {oldId:"15301",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2161"}}}) { id } } `
    
MUTATIONS[829] = `mutation mutation829 { createReviewMeta(data: {oldId:"15311",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"2151"}}}) { id } } `
    
MUTATIONS[830] = `mutation mutation830 { createReviewMeta(data: {oldId:"15321",metaType:"",metaName:"questionAnswer2",metaValue:"5",metaDeleted:false,review:{connect:{oldId:"2151"}}}) { id } } `
    
MUTATIONS[831] = `mutation mutation831 { createReviewMeta(data: {oldId:"15331",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"2151"}}}) { id } } `
    
MUTATIONS[832] = `mutation mutation832 { createReviewMeta(data: {oldId:"15341",metaType:"",metaName:"questionAnswer1",metaValue:"He%27s%20expressing%20his%20feelings%20towards%20someone%20he%20admires.%20He%20wants%20to%20be%20like%20his%20%5C%22big%20brother%5C%22%20and%20tries%20to%20get%20his%20approval%20on%20the%20things%20he%20does.%20But%20then%20when%20he%20starts%20to%20achieve%20big%20things%20it%20looks%20like%20the%20%5C%22big%20brother%5C%22%20gets%20jealous%20and%20they%20become%20rivals%20and%20maybe%20stop%20being%20%5C%22brothers%5C%22%2C0%2C%22%2CNULL%2C%222017-08-12%2003%3A40%3A49",metaDeleted:false,review:{connect:{oldId:"2151"}}}) { id } } `
    
MUTATIONS[833] = `mutation mutation833 { createReviewMeta(data: {oldId:"15351",metaType:"",metaName:"assignmentId",metaValue:"3VFJCI1K4ZZS49D191LNZYYNQYORGR",metaDeleted:false,review:{connect:{oldId:"2151"}}}) { id } } `
    
MUTATIONS[834] = `mutation mutation834 { createReviewMeta(data: {oldId:"15361",metaType:"",metaName:"hitId",metaValue:"3TZ0XG8CBUK4KAE36K4BSGMCH4E89F",metaDeleted:false,review:{connect:{oldId:"2151"}}}) { id } } `
    
MUTATIONS[835] = `mutation mutation835 { createReviewMeta(data: {oldId:"15371",metaType:"",metaName:"workerId",metaValue:"A1R1QAFW73B8CD",metaDeleted:false,review:{connect:{oldId:"2151"}}}) { id } } `
    
MUTATIONS[836] = `mutation mutation836 { createReviewMeta(data: {oldId:"15381",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2171"}}}) { id } } `
    
MUTATIONS[837] = `mutation mutation837 { createReviewMeta(data: {oldId:"15391",metaType:"",metaName:"preAuthorId",metaValue:"AK4MWX3C8X4IT",metaDeleted:false,review:{connect:{oldId:"2171"}}}) { id } } `
    
MUTATIONS[838] = `mutation mutation838 { createReviewMeta(data: {oldId:"15401",metaType:"",metaName:"preUserFavDemo",metaValue:"Electronic",metaDeleted:false,review:{connect:{oldId:"2171"}}}) { id } } `
    
MUTATIONS[839] = `mutation mutation839 { createReviewMeta(data: {oldId:"15411",metaType:"",metaName:"preUserGenderDemo",metaValue:"female",metaDeleted:false,review:{connect:{oldId:"2171"}}}) { id } } `
    
MUTATIONS[840] = `mutation mutation840 { createReviewMeta(data: {oldId:"15421",metaType:"",metaName:"preUserAgeDemo",metaValue:"26",metaDeleted:false,review:{connect:{oldId:"2171"}}}) { id } } `
    
MUTATIONS[841] = `mutation mutation841 { createReviewMeta(data: {oldId:"15431",metaType:"",metaName:"preUserExplicitDemo",metaValue:"off",metaDeleted:false,review:{connect:{oldId:"2171"}}}) { id } } `
    
MUTATIONS[842] = `mutation mutation842 { createReviewMeta(data: {oldId:"15441",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"2171"}}}) { id } } `
    
MUTATIONS[843] = `mutation mutation843 { createReviewMeta(data: {oldId:"15451",metaType:"",metaName:"questionAnswer2",metaValue:"7",metaDeleted:false,review:{connect:{oldId:"2171"}}}) { id } } `
    
MUTATIONS[844] = `mutation mutation844 { createReviewMeta(data: {oldId:"15461",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"2171"}}}) { id } } `
    
MUTATIONS[845] = `mutation mutation845 { createReviewMeta(data: {oldId:"15471",metaType:"",metaName:"questionAnswer1",metaValue:"about%20his%20big%20brother%20and%20his%20character%20and%20what%20he%20feels%20about%20him%20by%20saying%20big%20brother%20big%20scrubber%20and%20song%20is%20around%20it",metaDeleted:false,review:{connect:{oldId:"2171"}}}) { id } } `
    
MUTATIONS[846] = `mutation mutation846 { createReviewMeta(data: {oldId:"15481",metaType:"",metaName:"love_artist_0",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2171"}}}) { id } } `
    
MUTATIONS[847] = `mutation mutation847 { createReviewMeta(data: {oldId:"15491",metaType:"",metaName:"assignmentId",metaValue:"3XM0HYN6NKZ98I1VQERAU0DWC0LPEG",metaDeleted:false,review:{connect:{oldId:"2171"}}}) { id } } `
    
MUTATIONS[848] = `mutation mutation848 { createReviewMeta(data: {oldId:"15501",metaType:"",metaName:"hitId",metaValue:"3TZ0XG8CBUK4KAE36K4BSGMCH4E89F",metaDeleted:false,review:{connect:{oldId:"2171"}}}) { id } } `
    
MUTATIONS[849] = `mutation mutation849 { createReviewMeta(data: {oldId:"15511",metaType:"",metaName:"workerId",metaValue:"AK4MWX3C8X4IT",metaDeleted:false,review:{connect:{oldId:"2171"}}}) { id } } `
    
MUTATIONS[850] = `mutation mutation850 { createReviewMeta(data: {oldId:"15521",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"2161"}}}) { id } } `
    
MUTATIONS[851] = `mutation mutation851 { createReviewMeta(data: {oldId:"15531",metaType:"",metaName:"questionAnswer2",metaValue:"5",metaDeleted:false,review:{connect:{oldId:"2161"}}}) { id } } `
    
MUTATIONS[852] = `mutation mutation852 { createReviewMeta(data: {oldId:"15541",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"2161"}}}) { id } } `
    
MUTATIONS[853] = `mutation mutation853 { createReviewMeta(data: {oldId:"15551",metaType:"",metaName:"questionAnswer1",metaValue:"Kanye%20talks%20about%20his%20relationship%20with%20Jay%20Z%2C%20about%20how%20he%20admires%20his%20friend%20and%20treats%20him%20like%20a%20mentor%2C%20but%20at%20the%20same%20time%20feels%20as%20if%20he%20is%20also%20being%20held%20back%20by%20the%20very%20man%20that%20he%20idolizes.%20He%20talks%20about%20how%20he%20feels%20as%20if%20they%20were%20competing%20against%20each%20other%20despite%20their%20close%20friendship%20and%20believes%20that%20Jay%20Z%20was%20keeping%20him%20down%20and%20trying%20to%20interfere%20with%20his%20success%20when%20he%20was%20trying%20to%20make%20it%20in%20the%20rap%20game.%20Towards%20the%20end%2C%20he%20stresses%20that%20he%20continues%20to%20admire%20Jay%20Z%2C%20but%20feels%20that%20he%20is%20entitled%20to%20his%20own%20success%20and%20deserves%20recognition.",metaDeleted:false,review:{connect:{oldId:"2161"}}}) { id } } `
    
MUTATIONS[854] = `mutation mutation854 { createReviewMeta(data: {oldId:"15561",metaType:"",metaName:"love_artist_0",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2161"}}}) { id } } `
    
MUTATIONS[855] = `mutation mutation855 { createReviewMeta(data: {oldId:"15571",metaType:"",metaName:"assignmentId",metaValue:"3ZSY5X72NXBGWMUZXKYV477PHKFROE",metaDeleted:false,review:{connect:{oldId:"2161"}}}) { id } } `
    
MUTATIONS[856] = `mutation mutation856 { createReviewMeta(data: {oldId:"15581",metaType:"",metaName:"hitId",metaValue:"3TZ0XG8CBUK4KAE36K4BSGMCH4E89F",metaDeleted:false,review:{connect:{oldId:"2161"}}}) { id } } `
    
MUTATIONS[857] = `mutation mutation857 { createReviewMeta(data: {oldId:"15591",metaType:"",metaName:"workerId",metaValue:"A2G7N0X0PNX0EE",metaDeleted:false,review:{connect:{oldId:"2161"}}}) { id } } `
    
MUTATIONS[858] = `mutation mutation858 { createReviewMeta(data: {oldId:"15601",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2181"}}}) { id } } `
    
MUTATIONS[859] = `mutation mutation859 { createReviewMeta(data: {oldId:"15611",metaType:"",metaName:"preAuthorId",metaValue:"A23A4PL954WDAZ",metaDeleted:false,review:{connect:{oldId:"2181"}}}) { id } } `
    
MUTATIONS[860] = `mutation mutation860 { createReviewMeta(data: {oldId:"15621",metaType:"",metaName:"preUserFavDemo",metaValue:"Electronic",metaDeleted:false,review:{connect:{oldId:"2181"}}}) { id } } `
    
MUTATIONS[861] = `mutation mutation861 { createReviewMeta(data: {oldId:"15631",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"2181"}}}) { id } } `
    
MUTATIONS[862] = `mutation mutation862 { createReviewMeta(data: {oldId:"15641",metaType:"",metaName:"preUserAgeDemo",metaValue:"23",metaDeleted:false,review:{connect:{oldId:"2181"}}}) { id } } `
    
MUTATIONS[863] = `mutation mutation863 { createReviewMeta(data: {oldId:"15651",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2181"}}}) { id } } `
    
MUTATIONS[864] = `mutation mutation864 { createReviewMeta(data: {oldId:"15661",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2191"}}}) { id } } `
    
MUTATIONS[865] = `mutation mutation865 { createReviewMeta(data: {oldId:"15671",metaType:"",metaName:"preAuthorId",metaValue:"A3KI6DWNGPS1II",metaDeleted:false,review:{connect:{oldId:"2191"}}}) { id } } `
    
MUTATIONS[866] = `mutation mutation866 { createReviewMeta(data: {oldId:"15681",metaType:"",metaName:"preUserFavDemo",metaValue:"Folk",metaDeleted:false,review:{connect:{oldId:"2191"}}}) { id } } `
    
MUTATIONS[867] = `mutation mutation867 { createReviewMeta(data: {oldId:"15691",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"2191"}}}) { id } } `
    
MUTATIONS[868] = `mutation mutation868 { createReviewMeta(data: {oldId:"15701",metaType:"",metaName:"preUserAgeDemo",metaValue:"32",metaDeleted:false,review:{connect:{oldId:"2191"}}}) { id } } `
    
MUTATIONS[869] = `mutation mutation869 { createReviewMeta(data: {oldId:"15711",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2191"}}}) { id } } `
    
MUTATIONS[870] = `mutation mutation870 { createReviewMeta(data: {oldId:"15721",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"2181"}}}) { id } } `
    
MUTATIONS[871] = `mutation mutation871 { createReviewMeta(data: {oldId:"15731",metaType:"",metaName:"questionAnswer2",metaValue:"4",metaDeleted:false,review:{connect:{oldId:"2181"}}}) { id } } `
    
MUTATIONS[872] = `mutation mutation872 { createReviewMeta(data: {oldId:"15741",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"2181"}}}) { id } } `
    
MUTATIONS[873] = `mutation mutation873 { createReviewMeta(data: {oldId:"15751",metaType:"",metaName:"questionAnswer1",metaValue:"he%20trying%20connecting%20music%20with%20brothers%2Cbass%20to%20bass%20brother%20and%20hip%20pop%20to%20hip%20pop%20brother.he%20relating%20all%20ideas%20with%20music%20.",metaDeleted:false,review:{connect:{oldId:"2181"}}}) { id } } `
    
MUTATIONS[874] = `mutation mutation874 { createReviewMeta(data: {oldId:"15761",metaType:"",metaName:"assignmentId",metaValue:"3I3WADAZ9Q4RRZW10DLS162TP2R5OF",metaDeleted:false,review:{connect:{oldId:"2181"}}}) { id } } `
    
MUTATIONS[875] = `mutation mutation875 { createReviewMeta(data: {oldId:"15771",metaType:"",metaName:"hitId",metaValue:"3TZ0XG8CBUK4KAE36K4BSGMCH4E89F",metaDeleted:false,review:{connect:{oldId:"2181"}}}) { id } } `
    
MUTATIONS[876] = `mutation mutation876 { createReviewMeta(data: {oldId:"15781",metaType:"",metaName:"workerId",metaValue:"A23A4PL954WDAZ",metaDeleted:false,review:{connect:{oldId:"2181"}}}) { id } } `
    
MUTATIONS[877] = `mutation mutation877 { createReviewMeta(data: {oldId:"15791",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2201"}}}) { id } } `
    
MUTATIONS[878] = `mutation mutation878 { createReviewMeta(data: {oldId:"15801",metaType:"",metaName:"preAuthorId",metaValue:"AZE084MMZVEYT",metaDeleted:false,review:{connect:{oldId:"2201"}}}) { id } } `
    
MUTATIONS[879] = `mutation mutation879 { createReviewMeta(data: {oldId:"15811",metaType:"",metaName:"preUserFavDemo",metaValue:"Metal",metaDeleted:false,review:{connect:{oldId:"2201"}}}) { id } } `
    
MUTATIONS[880] = `mutation mutation880 { createReviewMeta(data: {oldId:"15821",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"2201"}}}) { id } } `
    
MUTATIONS[881] = `mutation mutation881 { createReviewMeta(data: {oldId:"15831",metaType:"",metaName:"preUserAgeDemo",metaValue:"31",metaDeleted:false,review:{connect:{oldId:"2201"}}}) { id } } `
    
MUTATIONS[882] = `mutation mutation882 { createReviewMeta(data: {oldId:"15841",metaType:"",metaName:"preUserExplicitDemo",metaValue:"off",metaDeleted:false,review:{connect:{oldId:"2201"}}}) { id } } `
    
MUTATIONS[883] = `mutation mutation883 { createReviewMeta(data: {oldId:"15851",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"2201"}}}) { id } } `
    
MUTATIONS[884] = `mutation mutation884 { createReviewMeta(data: {oldId:"15861",metaType:"",metaName:"questionAnswer2",metaValue:"4",metaDeleted:false,review:{connect:{oldId:"2201"}}}) { id } } `
    
MUTATIONS[885] = `mutation mutation885 { createReviewMeta(data: {oldId:"15871",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"2201"}}}) { id } } `
    
MUTATIONS[886] = `mutation mutation886 { createReviewMeta(data: {oldId:"15881",metaType:"",metaName:"questionAnswer1",metaValue:"That%20he%20loves%20his%20big%20brother.%20He%27s%20also%20singing%20about%20how%20great%20he%20thinks%20he%20is.%20Other%20than%20that%20I%20don%27t%20know.",metaDeleted:false,review:{connect:{oldId:"2201"}}}) { id } } `
    
MUTATIONS[887] = `mutation mutation887 { createReviewMeta(data: {oldId:"15891",metaType:"",metaName:"assignmentId",metaValue:"3N8OEVH1FRQDZ92J5SHRAC2K6XWOO3",metaDeleted:false,review:{connect:{oldId:"2201"}}}) { id } } `
    
MUTATIONS[888] = `mutation mutation888 { createReviewMeta(data: {oldId:"15901",metaType:"",metaName:"hitId",metaValue:"3TZ0XG8CBUK4KAE36K4BSGMCH4E89F",metaDeleted:false,review:{connect:{oldId:"2201"}}}) { id } } `
    
MUTATIONS[889] = `mutation mutation889 { createReviewMeta(data: {oldId:"15911",metaType:"",metaName:"workerId",metaValue:"AZE084MMZVEYT",metaDeleted:false,review:{connect:{oldId:"2201"}}}) { id } } `
    
MUTATIONS[890] = `mutation mutation890 { createReviewMeta(data: {oldId:"15921",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2211"}}}) { id } } `
    
MUTATIONS[891] = `mutation mutation891 { createReviewMeta(data: {oldId:"15931",metaType:"",metaName:"preAuthorId",metaValue:"A27AY9SE0DKHZU",metaDeleted:false,review:{connect:{oldId:"2211"}}}) { id } } `
    
MUTATIONS[892] = `mutation mutation892 { createReviewMeta(data: {oldId:"15941",metaType:"",metaName:"preUserFavDemo",metaValue:"Country",metaDeleted:false,review:{connect:{oldId:"2211"}}}) { id } } `
    
MUTATIONS[893] = `mutation mutation893 { createReviewMeta(data: {oldId:"15951",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"2211"}}}) { id } } `
    
MUTATIONS[894] = `mutation mutation894 { createReviewMeta(data: {oldId:"15961",metaType:"",metaName:"preUserAgeDemo",metaValue:"23",metaDeleted:false,review:{connect:{oldId:"2211"}}}) { id } } `
    
MUTATIONS[895] = `mutation mutation895 { createReviewMeta(data: {oldId:"15971",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2211"}}}) { id } } `
    
MUTATIONS[896] = `mutation mutation896 { createReviewMeta(data: {oldId:"15981",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2221"}}}) { id } } `
    
MUTATIONS[897] = `mutation mutation897 { createReviewMeta(data: {oldId:"15991",metaType:"",metaName:"preAuthorId",metaValue:"A3K2PAN274E1IL",metaDeleted:false,review:{connect:{oldId:"2221"}}}) { id } } `
    
MUTATIONS[898] = `mutation mutation898 { createReviewMeta(data: {oldId:"16001",metaType:"",metaName:"preUserFavDemo",metaValue:"Hip%20Hop",metaDeleted:false,review:{connect:{oldId:"2221"}}}) { id } } `
    
MUTATIONS[899] = `mutation mutation899 { createReviewMeta(data: {oldId:"16011",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"2221"}}}) { id } } `
    
MUTATIONS[900] = `mutation mutation900 { createReviewMeta(data: {oldId:"16021",metaType:"",metaName:"preUserAgeDemo",metaValue:"44",metaDeleted:false,review:{connect:{oldId:"2221"}}}) { id } } `
    
MUTATIONS[901] = `mutation mutation901 { createReviewMeta(data: {oldId:"16031",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2221"}}}) { id } } `
    
MUTATIONS[902] = `mutation mutation902 { createReviewMeta(data: {oldId:"16041",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2231"}}}) { id } } `
    
MUTATIONS[903] = `mutation mutation903 { createReviewMeta(data: {oldId:"16051",metaType:"",metaName:"preAuthorId",metaValue:"A2ZDK0Y5466BXN",metaDeleted:false,review:{connect:{oldId:"2231"}}}) { id } } `
    
MUTATIONS[904] = `mutation mutation904 { createReviewMeta(data: {oldId:"16061",metaType:"",metaName:"preUserFavDemo",metaValue:"Pop",metaDeleted:false,review:{connect:{oldId:"2231"}}}) { id } } `
    
MUTATIONS[905] = `mutation mutation905 { createReviewMeta(data: {oldId:"16071",metaType:"",metaName:"preUserGenderDemo",metaValue:"female",metaDeleted:false,review:{connect:{oldId:"2231"}}}) { id } } `
    
MUTATIONS[906] = `mutation mutation906 { createReviewMeta(data: {oldId:"16081",metaType:"",metaName:"preUserAgeDemo",metaValue:"45",metaDeleted:false,review:{connect:{oldId:"2231"}}}) { id } } `
    
MUTATIONS[907] = `mutation mutation907 { createReviewMeta(data: {oldId:"16091",metaType:"",metaName:"preUserExplicitDemo",metaValue:"off",metaDeleted:false,review:{connect:{oldId:"2231"}}}) { id } } `
    
MUTATIONS[908] = `mutation mutation908 { createReviewMeta(data: {oldId:"16101",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2241"}}}) { id } } `
    
MUTATIONS[909] = `mutation mutation909 { createReviewMeta(data: {oldId:"16111",metaType:"",metaName:"preAuthorId",metaValue:"A3KGXL68SGSEQI",metaDeleted:false,review:{connect:{oldId:"2241"}}}) { id } } `
    
MUTATIONS[910] = `mutation mutation910 { createReviewMeta(data: {oldId:"16121",metaType:"",metaName:"preUserFavDemo",metaValue:"Rock",metaDeleted:false,review:{connect:{oldId:"2241"}}}) { id } } `
    
MUTATIONS[911] = `mutation mutation911 { createReviewMeta(data: {oldId:"16131",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"2241"}}}) { id } } `
    
MUTATIONS[912] = `mutation mutation912 { createReviewMeta(data: {oldId:"16141",metaType:"",metaName:"preUserAgeDemo",metaValue:"31",metaDeleted:false,review:{connect:{oldId:"2241"}}}) { id } } `
    
MUTATIONS[913] = `mutation mutation913 { createReviewMeta(data: {oldId:"16151",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2241"}}}) { id } } `
    
MUTATIONS[914] = `mutation mutation914 { createReviewMeta(data: {oldId:"16161",metaType:"",metaName:"preTrackId",metaValue:"1831",metaDeleted:false,review:{connect:{oldId:"2251"}}}) { id } } `
    
MUTATIONS[915] = `mutation mutation915 { createReviewMeta(data: {oldId:"16171",metaType:"",metaName:"preAuthorId",metaValue:"AEXYBW3COL9JM",metaDeleted:false,review:{connect:{oldId:"2251"}}}) { id } } `
    
MUTATIONS[916] = `mutation mutation916 { createReviewMeta(data: {oldId:"16181",metaType:"",metaName:"preUserFavDemo",metaValue:"Rock",metaDeleted:false,review:{connect:{oldId:"2251"}}}) { id } } `
    
MUTATIONS[917] = `mutation mutation917 { createReviewMeta(data: {oldId:"16191",metaType:"",metaName:"preUserGenderDemo",metaValue:"male",metaDeleted:false,review:{connect:{oldId:"2251"}}}) { id } } `
    
MUTATIONS[918] = `mutation mutation918 { createReviewMeta(data: {oldId:"16201",metaType:"",metaName:"preUserAgeDemo",metaValue:"47",metaDeleted:false,review:{connect:{oldId:"2251"}}}) { id } } `
    
MUTATIONS[919] = `mutation mutation919 { createReviewMeta(data: {oldId:"16211",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"2251"}}}) { id } } `
    
MUTATIONS[920] = `mutation mutation920 { createReviewMeta(data: {oldId:"16221",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"2241"}}}) { id } } `
    
MUTATIONS[921] = `mutation mutation921 { createReviewMeta(data: {oldId:"16231",metaType:"",metaName:"questionAnswer2",metaValue:"1",metaDeleted:false,review:{connect:{oldId:"2241"}}}) { id } } `
    
MUTATIONS[922] = `mutation mutation922 { createReviewMeta(data: {oldId:"16241",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"2241"}}}) { id } } `
    
MUTATIONS[923] = `mutation mutation923 { createReviewMeta(data: {oldId:"16251",metaType:"",metaName:"questionAnswer1",metaValue:"Nothing****************************************************************************************************",metaDeleted:false,review:{connect:{oldId:"2241"}}}) { id } } `
    
MUTATIONS[924] = `mutation mutation924 { createReviewMeta(data: {oldId:"16261",metaType:"",metaName:"assignmentId",metaValue:"32SCWG5HIH45V38GKW8CICLJV2YP6W",metaDeleted:false,review:{connect:{oldId:"2241"}}}) { id } } `
    
MUTATIONS[925] = `mutation mutation925 { createReviewMeta(data: {oldId:"16271",metaType:"",metaName:"hitId",metaValue:"3TZ0XG8CBUK4KAE36K4BSGMCH4E89F",metaDeleted:false,review:{connect:{oldId:"2241"}}}) { id } } `
    
MUTATIONS[926] = `mutation mutation926 { createReviewMeta(data: {oldId:"16281",metaType:"",metaName:"workerId",metaValue:"A3KGXL68SGSEQI",metaDeleted:false,review:{connect:{oldId:"2241"}}}) { id } } `
    
MUTATIONS[927] = `mutation mutation927 { createReviewMeta(data: {oldId:"16291",metaType:"",metaName:"questionType2",metaValue:"rating",metaDeleted:false,review:{connect:{oldId:"2221"}}}) { id } } `
    
MUTATIONS[928] = `mutation mutation928 { createReviewMeta(data: {oldId:"16301",metaType:"",metaName:"questionAnswer2",metaValue:"9",metaDeleted:false,review:{connect:{oldId:"2221"}}}) { id } } `
    
MUTATIONS[929] = `mutation mutation929 { createReviewMeta(data: {oldId:"16311",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"2221"}}}) { id } } `
    
MUTATIONS[930] = `mutation mutation930 { createReviewMeta(data: {oldId:"16321",metaType:"",metaName:"questionAnswer1",metaValue:"Kanye%20giving%20his%20thoughts%20and%20experiences%20of%20his%20figurative%20big%20brother%20Jay-z.%20How%20he%20looked%20up%20to%20him%20since%20joining%20the%20roc%5C%22%20familia.",metaDeleted:false,review:{connect:{oldId:"2221"}}}) { id } } `
    
MUTATIONS[931] = `mutation mutation931 { createReviewMeta(data: {oldId:"139288",metaType:"",metaName:"love_artist_0",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"12644"}}}) { id } } `
    
MUTATIONS[932] = `mutation mutation932 { createReviewMeta(data: {oldId:"139289",metaType:"",metaName:"assignmentId",metaValue:"3Y54SXRO1LLOP6ROXVFZ3S0WOJOUTG",metaDeleted:false,review:{connect:{oldId:"12644"}}}) { id } } `
    
MUTATIONS[933] = `mutation mutation933 { createReviewMeta(data: {oldId:"139290",metaType:"",metaName:"hitId",metaValue:"3KG2UQJ0MJOVFGITTO4GW82WGE4NQL",metaDeleted:false,review:{connect:{oldId:"12644"}}}) { id } } `
    
MUTATIONS[934] = `mutation mutation934 { createReviewMeta(data: {oldId:"139291",metaType:"",metaName:"workerId",metaValue:"A23ROUAKU47KW6",metaDeleted:false,review:{connect:{oldId:"12644"}}}) { id } } `
    
MUTATIONS[935] = `mutation mutation935 { createReviewMeta(data: {oldId:"139292",metaType:"",metaName:"preTrackId",metaValue:"12556",metaDeleted:false,review:{connect:{oldId:"12645"}}}) { id } } `
    
MUTATIONS[936] = `mutation mutation936 { createReviewMeta(data: {oldId:"139293",metaType:"",metaName:"preAuthorId",metaValue:"A1H49IS4NJB5I4",metaDeleted:false,review:{connect:{oldId:"12645"}}}) { id } } `
    
MUTATIONS[937] = `mutation mutation937 { createReviewMeta(data: {oldId:"139294",metaType:"",metaName:"preUserFavDemo",metaValue:"Country",metaDeleted:false,review:{connect:{oldId:"12645"}}}) { id } } `
    
MUTATIONS[938] = `mutation mutation938 { createReviewMeta(data: {oldId:"139295",metaType:"",metaName:"preUserGenderDemo",metaValue:"female",metaDeleted:false,review:{connect:{oldId:"12645"}}}) { id } } `
    
MUTATIONS[939] = `mutation mutation939 { createReviewMeta(data: {oldId:"139296",metaType:"",metaName:"preUserAgeDemo",metaValue:"23",metaDeleted:false,review:{connect:{oldId:"12645"}}}) { id } } `
    
MUTATIONS[940] = `mutation mutation940 { createReviewMeta(data: {oldId:"139297",metaType:"",metaName:"preUserExplicitDemo",metaValue:"off",metaDeleted:false,review:{connect:{oldId:"12645"}}}) { id } } `
    
MUTATIONS[941] = `mutation mutation941 { createReviewMeta(data: {oldId:"139298",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"12645"}}}) { id } } `
    
MUTATIONS[942] = `mutation mutation942 { createReviewMeta(data: {oldId:"139299",metaType:"",metaName:"questionAnswer1",metaValue:"I%20like%20the%20beat%2C%20its%20makes%20me%20happy%20and%20brings%20up%20my%20spirits%21%20The%20beat%20at%20the%20very%20beginning%20grabs%20your%20attention.%20He%20has%20a%20nice%20voice%20and%20can%20sing%20very%20well.%20Has%20that%20country%20slang%20that%20I%20like%20in%20a%20good%20country%20song.%20This%20is%20a%20type%20of%20song%20I%20would%20listen%20to%20in%20the%20car%20on%20my%20way%20home%20from%20work%20to%20put%20me%20back%20in%20good%20spirits.%20Oh%20that%20guitar%20break%20is%20great%21%20LOVE%20THIS%20SONG%21%20",metaDeleted:false,review:{connect:{oldId:"12645"}}}) { id } } `
    
MUTATIONS[943] = `mutation mutation943 { createReviewMeta(data: {oldId:"139301",metaType:"",metaName:"love_artist_0",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"12645"}}}) { id } } `
    
MUTATIONS[944] = `mutation mutation944 { createReviewMeta(data: {oldId:"139302",metaType:"",metaName:"assignmentId",metaValue:"3M68NM076H7Q7GOVXOC1N7LYXCIR67",metaDeleted:false,review:{connect:{oldId:"12645"}}}) { id } } `
    
MUTATIONS[945] = `mutation mutation945 { createReviewMeta(data: {oldId:"139303",metaType:"",metaName:"hitId",metaValue:"3KG2UQJ0MJOVFGITTO4GW82WGE4NQL",metaDeleted:false,review:{connect:{oldId:"12645"}}}) { id } } `
    
MUTATIONS[946] = `mutation mutation946 { createReviewMeta(data: {oldId:"139304",metaType:"",metaName:"workerId",metaValue:"A1H49IS4NJB5I4",metaDeleted:false,review:{connect:{oldId:"12645"}}}) { id } } `
    
MUTATIONS[947] = `mutation mutation947 { createReviewMeta(data: {oldId:"139305",metaType:"",metaName:"preTrackId",metaValue:"12556",metaDeleted:false,review:{connect:{oldId:"12646"}}}) { id } } `
    
MUTATIONS[948] = `mutation mutation948 { createReviewMeta(data: {oldId:"139306",metaType:"",metaName:"preAuthorId",metaValue:"A3LO8RKDMCGTYV",metaDeleted:false,review:{connect:{oldId:"12646"}}}) { id } } `
    
MUTATIONS[949] = `mutation mutation949 { createReviewMeta(data: {oldId:"139307",metaType:"",metaName:"preUserFavDemo",metaValue:"Country",metaDeleted:false,review:{connect:{oldId:"12646"}}}) { id } } `
    
MUTATIONS[950] = `mutation mutation950 { createReviewMeta(data: {oldId:"139308",metaType:"",metaName:"preUserGenderDemo",metaValue:"female",metaDeleted:false,review:{connect:{oldId:"12646"}}}) { id } } `
    
MUTATIONS[951] = `mutation mutation951 { createReviewMeta(data: {oldId:"139309",metaType:"",metaName:"preUserAgeDemo",metaValue:"22",metaDeleted:false,review:{connect:{oldId:"12646"}}}) { id } } `
    
MUTATIONS[952] = `mutation mutation952 { createReviewMeta(data: {oldId:"139310",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"12646"}}}) { id } } `
    
MUTATIONS[953] = `mutation mutation953 { createReviewMeta(data: {oldId:"139311",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"12646"}}}) { id } } `
    
MUTATIONS[954] = `mutation mutation954 { createReviewMeta(data: {oldId:"139312",metaType:"",metaName:"questionAnswer1",metaValue:"I%20love%20this%20song%21%20Its%20great%21%21%21%20very%20positive%20and%20great%20handsome%20voice.%20it%20reminds%20me%20of%20my%20fridays%20at%20work%20around%204%3A30.%20when%20I%20have%20just%2030%20minutes%20until%20im%20off%20for%20the%20weekend%21%20when%20will%20this%20be%20on%20itunes%21%20I%20would%20definitely%20download%20it%21%21",metaDeleted:false,review:{connect:{oldId:"12646"}}}) { id } } `
    
MUTATIONS[955] = `mutation mutation955 { createReviewMeta(data: {oldId:"139314",metaType:"",metaName:"love_artist_0",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"12646"}}}) { id } } `
    
MUTATIONS[956] = `mutation mutation956 { createReviewMeta(data: {oldId:"139315",metaType:"",metaName:"assignmentId",metaValue:"3SUWZRL0MYD1YCJQBIS1O0MFIOPE6G",metaDeleted:false,review:{connect:{oldId:"12646"}}}) { id } } `
    
MUTATIONS[957] = `mutation mutation957 { createReviewMeta(data: {oldId:"139316",metaType:"",metaName:"hitId",metaValue:"3KG2UQJ0MJOVFGITTO4GW82WGE4NQL",metaDeleted:false,review:{connect:{oldId:"12646"}}}) { id } } `
    
MUTATIONS[958] = `mutation mutation958 { createReviewMeta(data: {oldId:"139317",metaType:"",metaName:"workerId",metaValue:"A3LO8RKDMCGTYV",metaDeleted:false,review:{connect:{oldId:"12646"}}}) { id } } `
    
MUTATIONS[959] = `mutation mutation959 { createReviewMeta(data: {oldId:"139318",metaType:"",metaName:"preTrackId",metaValue:"12556",metaDeleted:false,review:{connect:{oldId:"12647"}}}) { id } } `
    
MUTATIONS[960] = `mutation mutation960 { createReviewMeta(data: {oldId:"139319",metaType:"",metaName:"preAuthorId",metaValue:"ASLJLRG427GXC",metaDeleted:false,review:{connect:{oldId:"12647"}}}) { id } } `
    
MUTATIONS[961] = `mutation mutation961 { createReviewMeta(data: {oldId:"139320",metaType:"",metaName:"preUserFavDemo",metaValue:"Country",metaDeleted:false,review:{connect:{oldId:"12647"}}}) { id } } `
    
MUTATIONS[962] = `mutation mutation962 { createReviewMeta(data: {oldId:"139321",metaType:"",metaName:"preUserGenderDemo",metaValue:"female",metaDeleted:false,review:{connect:{oldId:"12647"}}}) { id } } `
    
MUTATIONS[963] = `mutation mutation963 { createReviewMeta(data: {oldId:"139322",metaType:"",metaName:"preUserAgeDemo",metaValue:"58",metaDeleted:false,review:{connect:{oldId:"12647"}}}) { id } } `
    
MUTATIONS[964] = `mutation mutation964 { createReviewMeta(data: {oldId:"139323",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"12647"}}}) { id } } `
    
MUTATIONS[965] = `mutation mutation965 { createReviewMeta(data: {oldId:"139324",metaType:"",metaName:"preTrackId",metaValue:"12556",metaDeleted:false,review:{connect:{oldId:"12648"}}}) { id } } `
    
MUTATIONS[966] = `mutation mutation966 { createReviewMeta(data: {oldId:"139325",metaType:"",metaName:"preAuthorId",metaValue:"ASLJLRG427GXC",metaDeleted:false,review:{connect:{oldId:"12648"}}}) { id } } `
    
MUTATIONS[967] = `mutation mutation967 { createReviewMeta(data: {oldId:"139326",metaType:"",metaName:"preUserFavDemo",metaValue:"Country",metaDeleted:false,review:{connect:{oldId:"12648"}}}) { id } } `
    
MUTATIONS[968] = `mutation mutation968 { createReviewMeta(data: {oldId:"139327",metaType:"",metaName:"preUserGenderDemo",metaValue:"female",metaDeleted:false,review:{connect:{oldId:"12648"}}}) { id } } `
    
MUTATIONS[969] = `mutation mutation969 { createReviewMeta(data: {oldId:"139328",metaType:"",metaName:"preUserAgeDemo",metaValue:"58",metaDeleted:false,review:{connect:{oldId:"12648"}}}) { id } } `
    
MUTATIONS[970] = `mutation mutation970 { createReviewMeta(data: {oldId:"139329",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"12648"}}}) { id } } `
    
MUTATIONS[971] = `mutation mutation971 { createReviewMeta(data: {oldId:"139330",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"12648"}}}) { id } } `
    
MUTATIONS[972] = `mutation mutation972 { createReviewMeta(data: {oldId:"139331",metaType:"",metaName:"questionAnswer1",metaValue:"Yes%20I%20like%20this%20song%20because%20it%20puts%20you%20in%20mind%20of%20traveling%20down%20the%20east%20coast%20enjoying%20life%2C%20having%20fun%2C%20spending%20money%20not%20having%20a%20care%20in%20the%20world.%20%20It%20has%20a%20great%20beat%20to%20it%20nice%20for%20easy%20listening.%20%20Good%20dancing%20music.%20%20I%20would%20share%20this%20song%20with%20others.%20%20His%20voice%20is%20mesmerizing.%20",metaDeleted:false,review:{connect:{oldId:"12648"}}}) { id } } `
    
MUTATIONS[973] = `mutation mutation973 { createReviewMeta(data: {oldId:"139333",metaType:"",metaName:"love_artist_0",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"12648"}}}) { id } } `
    
MUTATIONS[974] = `mutation mutation974 { createReviewMeta(data: {oldId:"139334",metaType:"",metaName:"assignmentId",metaValue:"3KB8R4ZV1E75O2WCD4ZXZJTKA9WGBC",metaDeleted:false,review:{connect:{oldId:"12648"}}}) { id } } `
    
MUTATIONS[975] = `mutation mutation975 { createReviewMeta(data: {oldId:"139335",metaType:"",metaName:"hitId",metaValue:"3KG2UQJ0MJOVFGITTO4GW82WGE4NQL",metaDeleted:false,review:{connect:{oldId:"12648"}}}) { id } } `
    
MUTATIONS[976] = `mutation mutation976 { createReviewMeta(data: {oldId:"139336",metaType:"",metaName:"workerId",metaValue:"ASLJLRG427GXC",metaDeleted:false,review:{connect:{oldId:"12648"}}}) { id } } `
    
MUTATIONS[977] = `mutation mutation977 { createReviewMeta(data: {oldId:"139337",metaType:"",metaName:"preTrackId",metaValue:"12556",metaDeleted:false,review:{connect:{oldId:"12649"}}}) { id } } `
    
MUTATIONS[978] = `mutation mutation978 { createReviewMeta(data: {oldId:"139338",metaType:"",metaName:"preAuthorId",metaValue:"A2Q2GKLVR4E5YC",metaDeleted:false,review:{connect:{oldId:"12649"}}}) { id } } `
    
MUTATIONS[979] = `mutation mutation979 { createReviewMeta(data: {oldId:"139339",metaType:"",metaName:"preUserFavDemo",metaValue:"Country",metaDeleted:false,review:{connect:{oldId:"12649"}}}) { id } } `
    
MUTATIONS[980] = `mutation mutation980 { createReviewMeta(data: {oldId:"139340",metaType:"",metaName:"preUserGenderDemo",metaValue:"female",metaDeleted:false,review:{connect:{oldId:"12649"}}}) { id } } `
    
MUTATIONS[981] = `mutation mutation981 { createReviewMeta(data: {oldId:"139341",metaType:"",metaName:"preUserAgeDemo",metaValue:"35",metaDeleted:false,review:{connect:{oldId:"12649"}}}) { id } } `
    
MUTATIONS[982] = `mutation mutation982 { createReviewMeta(data: {oldId:"139342",metaType:"",metaName:"preUserExplicitDemo",metaValue:"off",metaDeleted:false,review:{connect:{oldId:"12649"}}}) { id } } `
    
MUTATIONS[983] = `mutation mutation983 { createReviewMeta(data: {oldId:"139343",metaType:"",metaName:"preTrackId",metaValue:"12556",metaDeleted:false,review:{connect:{oldId:"12650"}}}) { id } } `
    
MUTATIONS[984] = `mutation mutation984 { createReviewMeta(data: {oldId:"139344",metaType:"",metaName:"preAuthorId",metaValue:"A1L1F8POM8JMIU",metaDeleted:false,review:{connect:{oldId:"12650"}}}) { id } } `
    
MUTATIONS[985] = `mutation mutation985 { createReviewMeta(data: {oldId:"139345",metaType:"",metaName:"preUserFavDemo",metaValue:"Country",metaDeleted:false,review:{connect:{oldId:"12650"}}}) { id } } `
    
MUTATIONS[986] = `mutation mutation986 { createReviewMeta(data: {oldId:"139346",metaType:"",metaName:"preUserGenderDemo",metaValue:"female",metaDeleted:false,review:{connect:{oldId:"12650"}}}) { id } } `
    
MUTATIONS[987] = `mutation mutation987 { createReviewMeta(data: {oldId:"139347",metaType:"",metaName:"preUserAgeDemo",metaValue:"20",metaDeleted:false,review:{connect:{oldId:"12650"}}}) { id } } `
    
MUTATIONS[988] = `mutation mutation988 { createReviewMeta(data: {oldId:"139348",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"12650"}}}) { id } } `
    
MUTATIONS[989] = `mutation mutation989 { createReviewMeta(data: {oldId:"139349",metaType:"",metaName:"questionType1",metaValue:"written_response",metaDeleted:false,review:{connect:{oldId:"12650"}}}) { id } } `
    
MUTATIONS[990] = `mutation mutation990 { createReviewMeta(data: {oldId:"139350",metaType:"",metaName:"questionAnswer1",metaValue:"Sounds%20starts%20out%20with%20joyful%20%20story%20likeness.%20Very%20relateable%20about%20the%20part%20where%20everyone%20looks%20forward%20to%20the%20weekend%20an%20how%20there%20is%20never%20enough%20time%20to%20enjoy%20a%20night%20out.%20Beat%20of%20the%20drummer%20is%20really%20good%20on%20the%20tone%20of%20the%20song%2C%20very%20nice%20vocals%20as%20well.",metaDeleted:false,review:{connect:{oldId:"12650"}}}) { id } } `
    
MUTATIONS[991] = `mutation mutation991 { createReviewMeta(data: {oldId:"139352",metaType:"",metaName:"assignmentId",metaValue:"32VNZTT0A74CSTKHE0JMQ91L2RRR4G",metaDeleted:false,review:{connect:{oldId:"12650"}}}) { id } } `
    
MUTATIONS[992] = `mutation mutation992 { createReviewMeta(data: {oldId:"139353",metaType:"",metaName:"hitId",metaValue:"3KG2UQJ0MJOVFGITTO4GW82WGE4NQL",metaDeleted:false,review:{connect:{oldId:"12650"}}}) { id } } `
    
MUTATIONS[993] = `mutation mutation993 { createReviewMeta(data: {oldId:"139354",metaType:"",metaName:"workerId",metaValue:"A1L1F8POM8JMIU",metaDeleted:false,review:{connect:{oldId:"12650"}}}) { id } } `
    
MUTATIONS[994] = `mutation mutation994 { createReviewMeta(data: {oldId:"139355",metaType:"",metaName:"preTrackId",metaValue:"12556",metaDeleted:false,review:{connect:{oldId:"12651"}}}) { id } } `
    
MUTATIONS[995] = `mutation mutation995 { createReviewMeta(data: {oldId:"139356",metaType:"",metaName:"preAuthorId",metaValue:"A3RO37XSHUDKNX",metaDeleted:false,review:{connect:{oldId:"12651"}}}) { id } } `
    
MUTATIONS[996] = `mutation mutation996 { createReviewMeta(data: {oldId:"139357",metaType:"",metaName:"preUserFavDemo",metaValue:"Country",metaDeleted:false,review:{connect:{oldId:"12651"}}}) { id } } `
    
MUTATIONS[997] = `mutation mutation997 { createReviewMeta(data: {oldId:"139358",metaType:"",metaName:"preUserGenderDemo",metaValue:"female",metaDeleted:false,review:{connect:{oldId:"12651"}}}) { id } } `
    
MUTATIONS[998] = `mutation mutation998 { createReviewMeta(data: {oldId:"139359",metaType:"",metaName:"preUserAgeDemo",metaValue:"42",metaDeleted:false,review:{connect:{oldId:"12651"}}}) { id } } `
    
MUTATIONS[999] = `mutation mutation999 { createReviewMeta(data: {oldId:"139360",metaType:"",metaName:"preUserExplicitDemo",metaValue:"on",metaDeleted:false,review:{connect:{oldId:"12651"}}}) { id } } `
    export default MUTATIONS as string[];