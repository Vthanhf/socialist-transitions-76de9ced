// Vietnamese Ethnic Groups Data
// Based on 54 recognized ethnic groups in Vietnam

export interface EthnicGroup {
  id: string;
  name: string;
  enName: string;
  population: number;
  regions: string[]; // Province names where they are distributed
  description: string;
  language: string;
  clothing?: string;
  traditions?: string;
  hint?: string;
  image?: string;
  color: string;
  heatmapData?: Array<{ lat: number; lng: number; value: number }>;
}

// Approximate distribution data for 54 ethnic groups
export const ethnicGroupsData: EthnicGroup[] = [
  {
    id: "kinh",
    name: "Kinh",
    enName: "Kinh",
    population: 86000000,
    regions: ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Cần Thơ", "Hải Phòng", "Bình Dương", "Đồng Nai", "Bà Rịa-Vũng Tàu", "Hưng Yên", "Hà Nam", "Nam Định", "Ninh Bình", "Thanh Hóa", "Nghệ An", "Hà Tĩnh", "Quảng Bình", "Quảng Trị", "Thừa Thiên-Huế", "Quảng Nam", "Quảng Ngãi", "Bình Định", "Phú Yên", "Khánh Hòa", "Ninh Thuận", "Bình Thuận", "Đắk Lắk", "Đắk Nông", "Gia Lai", "Kon Tum", "Lâm Đồng", "An Giang", "Bạc Liêu", "Cà Mau", "Kiên Giang", "Long An", "Tiền Giang", "Trà Vinh", "Vĩnh Long","Lào Cai", "Yên Bái", "Hà Giang", "Tuyên Quang", "Cao Bằng", "Lạng Sơn", "Bắc Kạn", "Thái Nguyên","Sơn La", "Điện Biên", "Lai Châu", "Hòa Bình"],
    description: "Dân tộc Kinh là nhóm dân tộc chính tại Việt Nam, chiếm hơn 85% dân số cả nước. Họ phân bố khắp đất nước, đặc biệt tập trung ở các đô thị và khu vực đông dân cư.",
    language: "Tiếng Việt",
    clothing: "Áo dài truyền thống",
    traditions: "Tết Nguyên Đán, Tết Trung Thu",
    hint: "Sinh sống chủ yếu ở đồng bằng và đô thị với hạ tầng hiện đại. Tuy nhiên, giới trẻ đang dần lãng quên các loại hình nghệ thuật và trang phục truyền thống.",
    image: "/assets/Kinh.avif",
    color: "#FF6B6B"
  },
  {
    id: "tay",
    name: "Tày",
    enName: "Tay",
    population: 1700000,
    regions: ["Cao Bằng", "Bắc Kạn", "Tuyên Quang", "Thái Nguyên", "Lạng Sơn", "Bắc Giang", "Yên Bái"],
    description: "Dân tộc Tày sinh sống chủ yếu ở vùng đông bắc Việt Nam. Họ có nền văn hóa trui rèn lâu đời với những đặc trưng riêng trong cách sống, bằng văn, phong tục tập quán.",
    language: "Tiếng Tày",
    clothing: "Váy dài, áo cánh",
    traditions: "Tết cổ truyền",
    hint: "Sống ở thung lũng Đông Bắc, canh tác lúa nước cực giỏi, con em học hành đỗ đạt cao. Dù vậy, những nếp nhà sàn đang bị thay bằng nhà xây, hát Then vắng bóng dần.",
    image: "/assets/Tày.avif",
    color: "#4ECDC4"
  },
  {
    id: "thai",
    name: "Thái",
    enName: "Thai",
    population: 1500000,
    regions: ["Sơn La", "Lai Châu", "Điện Biên", "Hòa Bình"],
    description: "Dân tộc Thái có nền văn hóa phong phú, phân bố ở vùng tây bắc. Nổi tiếng với những chiếc nhà sàn độc đáo và những bộ trang phục truyền thống đầy sắc màu.",
    language: "Tiếng Thái",
    clothing: "Váy sọc",
    traditions: "Lễ hội Thái Cổ",
    hint: "Nổi tiếng với múa Xòe và áo cóm vùng Tây Bắc. Du lịch giúp đời sống khá lên, nhưng phụ nữ ở các bản xa vẫn sinh con tại nhà do trạm y tế cách nhiều ngọn đồi.",
    image: "/assets/Thái.avif",
    color: "#FFE66D"
  },
  {
    id: "muong",
    name: "Mường",
    enName: "Muong",
    population: 1350000,
    regions: ["Hòa Bình", "Thanh Hóa", "Hà Sơn Bình", "Vĩnh Phúc"],
    description: "Dân tộc Mường có văn hóa gần gũi với Kinh, sinh sống ở vùng đông bắc. Là một trong những dân tộc đông thứ hai tại Việt Nam.",
    language: "Tiếng Mường",
    hint: "Đời sống kinh tế ổn định nhờ giao thoa tốt với miền xuôi. Tuy nhiên, thanh niên hiện nay ít người còn biết đánh cồng chiêng hay nói trôi chảy tiếng mẹ đẻ.",
    image: "/assets/Mường.avif",
    color: "#95E1D3"
  },
  {
    id: "khmer",
    name: "Khmer",
    enName: "Khmer",
    population: 1300000,
    regions: ["An Giang", "Kiên Giang", "Cà Mau", "Bạc Liêu", "Hậu Giang", "Vĩnh Long", "Trà Vinh", "Sóc Trăng"],
    description: "Dân tộc Khmer sinh sống chủ yếu ở vùng đồng bằng sông Cửu Long. Là hậu duệ của nền văn minh Khmer cổ với những di sản văn hóa đồ sộ.",
    language: "Tiếng Khmer",
    clothing: "Sampot truyền thống",
    traditions: "Tết Chol Chnam Thmay",
    hint: "Sở hữu những ngôi chùa lộng lẫy ở đồng bằng sông Cửu Long. Đáng tiếc, hạn mặn khiến ruộng đồng thất thu, nhiều thanh niên phải bỏ học lên phố làm công nhân.",
    image: "/assets/Khmer.avif",
    color: "#FF9E64"
  },
  {
    id: "hoa",
    name: "Hoa",
    enName: "Chinese",
    population: 900000,
    regions: ["Hà Nội", "Hồ Chí Minh", "Hải Phòng", "Đà Nẵng", "Hải Dương"],
    description: "Người Hoa phân bố chủ yếu ở các thành phố lớn, nơi có hoạt động thương mại. Họ đóng góp quan trọng vào phát triển kinh tế và thương mại.",
    language: "Tiếng Hoa",
    hint: "Họ là những thương nhân tài ba ở các thành phố lớn. Con cái được tiếp cận y tế, giáo dục hàng đầu. Đổi lại, các bang hội cổ và tiếng nói riêng bị đồng hóa rất mạnh.",
    image: "/assets/Hoa.avif",
    color: "#C7CEEA"
  },
  {
    id: "ede",
    name: "Ê Đê",
    enName: "Ede",
    population: 350000,
    regions: ["Đắk Lắk", "Lâm Đồng"],
    description: "Dân tộc Ê Đê sống chủ yếu ở vùng tây nguyên, có nền văn hóa độc đáo. Nổi tiếng với lễ hội Ốc Om Ốc mang tính cộng đồng cao.",
    hint: "Nhờ trồng cà phê, cao su, kinh tế và y tế có khởi sắc rõ rệt. Đáng buồn thay, rừng cạn kiệt khiến những ngôi nhà dài không còn gỗ cất, chế độ mẫu hệ mờ nhạt dần.",
    image: "/assets/Ê Đê.avif",
    language: "Tiếng Ê Đê",
    color: "#F38181"
  },
  {
    id: "ba-na",
    name: "Ba Na",
    enName: "Bana",
    population: 300000,
    regions: ["Quảng Nam", "Kon Tum", "Gia Lai"],
    description: "Dân tộc Ba Na bánh bộ ở vùng miền trung, có lễ hội Gừa độc đáo. Họ sở hữu những căn nhà rông lớn là biểu tượng của văn hóa cộng đồng.",
    hint: "Sở hữu ngôi nhà Rông vút cao giữa đại ngàn. Các bản làng vẫn giữ truyền thống, nhưng đường xa cách trở khiến học sinh thiếu lớp học kiên cố.",
    image: "/assets/Ba Na.avif",
    language: "Tiếng Ba Na",
    color: "#AA96DA"
  },
  {
    id: "gia-rai",
    name: "Gia Rai",
    enName: "Jarai",
    population: 300000,
    regions: ["Gia Lai", "Đắk Lắk", "Đắk Nông"],
    description: "Dân tộc Gia Rai phân bố ở tây nguyên, có nền văn hóa nông nghiệp phát triển. Họ được biết đến qua những lễ hội độc đáo và nền giáo dục truyền thống.",
    image: "/assets/Gia Rai.avif",
    hint: "Văn hóa nhà mồ và cồng chiêng Tây Nguyên rực rỡ. Dù vậy, đất canh tác bạc màu, đầu ra nông sản kém khiến cái nghèo vẫn đeo bám nhiều bản làng.",
    language: "Tiếng Gia Rai",
    color: "#FCBAD3"
  },
  {
    id: "mong",
    name: "Mông",
    enName: "Hmong",
    population: 1000000,
    regions: ["Yên Bái", "Sơn La", "Lai Châu", "Điện Biên", "Lào Cai", "Tuyên Quang"],
    image: "/assets/Mông.avif",
    hint: "Sống trên đỉnh núi mây mù, giữ gìn hoàn hảo tục bắt vợ và dệt lanh. Đổi lại, kinh tế nương rẫy bấp bênh, trẻ em thiếu áo ấm và phải đi bộ rất xa để học chữ.",
    description: "Dân tộc Mông sinh sống ở các vùng cao nguyên phía bắc. Nổi tiếng với những bộ trang phục đầy màu sắc và các lễ hội Tết cổ truyền.",
    language: "Tiếng Mông",
    color: "#A8D8EA"
  },
  {
    id: "dao",
    name: "Dao",
    enName: "Dao",
    population: 800000,
    regions: ["Lào Cai", "Yên Bái", "Tuyên Quang", "Cao Bằng", "Bắc Kạn", "Hà Giang"],
    image: "/assets/Dao.avif",
    hint: "Giữ được chữ Nôm Dao và lễ cấp sắc uy nghi. Vì sống phân tán ở những nơi heo hút, đường đi lại sạt lở khiến việc khám chữa bệnh gặp vô vàn trở ngại.",
    description: "Dân tộc Dao phân bố rải rác ở vùng cao phía bắc Việt Nam. Có nhiều chi tộc khác nhau với những khác biệt về phong tục và trang phục.",
    language: "Tiếng Dao",
    color: "#FFAFCC"
  },
  {
    id: "lao",
    name: "Lào",
    enName: "Lao",
    population: 400000,
    image: "/assets/Lào.avif",
    hint: "Đời sống tương đối ổn định ven các thung lũng Điện Biên, Sơn La. Cần lưu giữ tốt hơn các điệu Lăm Vông và lễ hội Té nước đang ít được tổ chức.",
    regions: ["Sơn La", "Hòa Bình", "Nghệ An", "Hà Tĩnh", "Quảng Bình"],
    description: "Dân tộc Lào sống ở vùng tây bắc gần giáp biên giới Lào. Có nền văn hóa tương tự nhân dân Lào với những đặc trưng riêng.",
    language: "Tiếng Lào",
    color: "#FFC0CB"
  },
  {
    id: "lo-lo",
    name: "Lô Lô",
    enName: "Lolo",
    population: 100000,
    image: "/assets/Lô Lô.avif",
    regions: ["Yên Bái", "Lào Cai", "Tuyên Quang"],
    description: "Dân tộc Lô Lô có số lượng nhỏ, phân bố ở các huyện cao nguyên. Là dân tộc ít người nhưng có nền văn hóa độc đáo.",
    language: "Tiếng Lô Lô",
    hint: "Dù ít người nhưng sở hữu điệu múa trống đồng cổ xưa rực rỡ nhất Hà Giang. Khí hậu đá tai mèo khắc nghiệt cản trở kinh tế, y tế vô cùng thiếu thốn.",
    color: "#B5EAD7"
  },
  {
    id: "san-chay",
    name: "Sán Chay",
    enName: "San Chay",
    image: "/assets/Sán Chay.avif",
    hint: "Sống tập trung ở trung du Bắc Bộ, ruộng nương khá phát triển. Dù no ấm, điệu múa xúc tép hay hát Sấng Cọ hiếm khi còn được vang lên trong làng.",
    population: 150000,
    regions: ["Tuyên Quang", "Thái Nguyên", "Bắc Kạn"],
    description: "Dân tộc Sán Chay sinh sống ở các vùng cao, gần biên giới Trung Quốc. Có phong tục ăn Tết rất độc đáo.",
    language: "Tiếng Sán Chay",
    color: "#C1E1EC"
  },
  {
    id: "kho-mu",
    name: "Kho Mú",
    image: "/assets/Khơ Mú.avif",
    hint: "Bập thầu đan lát mây tre vùng Tây Bắc. Thường sống trên sường núi rất dốc, bà con thiếu trầm trọng nước sạch sinh hoạt và trường học kiên cố cho con em.",
    enName: "Kho Mu",
    population: 100000,
    regions: ["Sơn La", "Lai Châu", "Điện Biên"],
    description: "Dân tộc Kho Mú có nền văn hóa độc đáo, phân bố ở vùng tây bắc. Chủ yếu sống trong các khu vực rừng và cao nguyên.",
    language: "Tiếng Kho Mú",
    color: "#E4C1F9"
  },
  {
    id: "cham",
    name: "Chăm",
    image: "/assets/Chăm.avif",
    enName: "Cham",
    population: 150000,
    regions: ["Ninh Thuận", "Bình Thuận", "Cần Thơ", "Hồ Chí Minh"],
    description: "Dân tộc Chăm là hậu duệ vương quốc Chăm Pa cổ, phân bố ở miền trung nam. Có nền văn hóa Hồi giáo với những tháp Chăm tuyệt đẹp.",
    language: "Tiếng Chăm",
    color: "#FFC6FF"
  },
  {
    id: "khong",
    name: "Khơ Mú",
    image: "/assets/Khơ Mú.avif",
    enName: "Khmu",
    population: 80000,
    regions: ["Sơn La", "Hòa Bình"],
    description: "Dân tộc Khơ Mú phân bố ở các vùng cao nguyên phía tây bắc. Sống trên núi cao trong các khu rừng nguyên sinh.",
    language: "Tiếng Khơ Mú",
    color: "#DDA0DD"
  },
  {
    id: "lachi",
    name: "La Chí",
    enName: "Lachi",
    population: 55000,
    regions: ["Hà Giang", "Lào Cai"],
    description: "Dân tộc La Chí sống ở những khu vực cao đặc biệt gần biên giới phía bắc. Là dân tộc ít người với phong tục độc đáo.",
    language: "Tiếng La Chí",
    image: "/assets/La Chí.avif",
    color: "#F0E68C"
  },
  {
    id: "lafu",
    name: "La Hủ",
    enName: "Lahu",
    population: 25000,
    regions: ["Sơn La", "Lai Châu"],
    description: "Dân tộc La Hủ là một nhóm dân tộc nhỏ ở vùng tây bắc. Sở hữu những đặc trưng văn hóa đặc biệt.",
    language: "Tiếng La Hủ",
    image: "/assets/La Ha.avif",
    color: "#98D8C8"
  },
  {
    id: "phu-la",
    name: "Phủ Lá",
    enName: "Phu La",
    population: 20000,
    regions: ["Sơn La", "Lai Châu"],
    description: "Dân tộc Phủ Lá là một nhóm dân tộc nhỏ phân bố ở tây bắc. Có nền văn hóa riêng biệt giữa các dân tộc miền núi.",
    image: "/assets/Phù Lá.avif",
    language: "Tiếng Phủ Lá",
    color: "#B4E7FF"
  },
  {
    id: "hung",
    name: "Hùng",
    enName: "Hung",
    population: 30000,
    regions: ["Yên Bái", "Sơn La"],
    description: "Dân tộc Hùng sống phân tán ở các vùng cao. Có nối tiếp truyền thống văn đoan của các dân tộc cao nguyên.",
    image: "/assets/Hà Nhì.avif",
    language: "Tiếng Hùng",
    color: "#FFA07A"
  },
  {
    id: "raglai",
    name: "Ra Glai",
    enName: "Ra Glai",
    population: 50000,
    regions: ["Ninh Thuận", "Bình Thuận"],
    image: "/assets/Ra Glai.avif",
    description: "Dân tộc Ra Glai sinh sống ở vùng miền trung nam Việt Nam. Có nền kinh tế chủ yếu dựa trên nông nghiệp.",
    language: "Tiếng Ra Glai",
    hint: "Chủ nhân của những bộ đàn đá thiêng liêng sườn Đông Trường Sơn. Tỷ lệ suy dinh dưỡng trẻ em còn khá do phụ thuộc nương rẫy nứt nẻ mùa khô.",
    color: "#F5DEB3"
  },
  {
    id: "nung",
    name: "Nùng",
    enName: "Nung",
    population: 800000,
    regions: ["Cao Bằng", "Lạng Sơn", "Tuyên Quang"],
    description: "Dân tộc Nùng sinh sống ở các tỉnh phía đông bắc Việt Nam. Có nền văn hóa tương tự với dân tộc Tày.",
    language: "Tiếng Nùng",
    image: "/assets/Nùng.avif",
    color: "#FFB347"
  },
  {
    id: "chut",
    name: "Chứt",
    enName: "Chut",
    population: 30000,
    regions: ["Quảng Bình", "Quảng Trị"],
    image: "/assets/Chứt.avif",
    hint: "Từ ngày sống trong hang đá nguyên thủy, nay mới ra định cư ở biên giới Quảng Bình. Gặp muôn vàn khó khăn về thiếu đất sản xuất, y tế và giáo dục yếu kém.",
    description: "Dân tộc Chứt sống ở vùng miền trung, là một trong những dân tộc ít người nhất.",
    language: "Tiếng Chứt",
    color: "#FFA500"
  },
  {
    id: "tho",
    name: "Thổ",
    enName: "Tho",
    population: 70000,
    regions: ["Nghệ An", "Hà Tĩnh", "Quảng Bình"],
    image: "/assets/Thổ.avif",
    hint: "Giao thoa mạnh mẽ với người Kinh ở Nghệ An, đời sống vật chất không ngưng cải thiện. Cái giá phải trả là ngôn ngữ và phong tục riêng gần như lụi tàn.",
    description: "Dân tộc Thổ sống ở vùng trung bộ Việt Nam, gần vùng cư trú của dân tộc Chứt.",
    language: "Tiếng Thổ",
    color: "#FFD700"
  },
  {
    id: "bru",
    name: "Bru",
    enName: "Bru",
    population: 100000,
    image: "/assets/Bru-Vân Kiều.avif",
    regions: ["Quảng Trị", "Quảng Bình"],
    description: "Dân tộc Bru sống ở vùng miền trung, khu vực Tây Quảng Trị.",
    language: "Tiếng Bru",
    hint: "Vượt qua bom đạn chiến tranh, họ sống kiên cường ở Tây Quảng Trị. Giao thông khó khăn, đói nghèo còn tiếp diễn, trường lớp đơn sơ là nỗi lo lớn nhất.",
    color: "#ADFF2F"
  },
  {
    id: "co-tu",
    name: "Cơ Tu",
    enName: "Co Tu",
    image: "/assets/Cơ Tu.avif",
    population: 50000,
    regions: ["Quảng Nam", "Thừa Thiên-Huế"],
    description: "Dân tộc Cơ Tu sống ở vùng Tây Quảng Nam, miền núi phía tây.",
    language: "Tiếng Cơ Tu",
    hint: "Nhà Gươl và điệu múa Tung tung da dá là báu vật sống. Tuy nhiên, đường vào bản hay sạt lở mùa mưa, thương lái không vào được khiến nông sản ứ đọng.",
    color: "#00FF00"
  },
  {
    id: "ta-oi",
    name: "Tà Ôi",
    enName: "Ta Oi",
    image: "/assets/Tà Ôi.avif",
    population: 50000,
    regions: ["Quảng Trị"],
    description: "Dân tộc Tà Ôi sống ở vùng miền trung, có ngôn ngữ độc đáo.",
    language: "Tiếng Tà Ôi",
    hint: "Nổi tiếng khắp vùng với nghệ thuật dệt Zèng tinh xảo. Địa hình Trường Sơn hiểm trở cản trở giao thương, đời sống cái mặc có đủ nhưng cái ăn vẫn vất vả.",
    color: "#00CED1"
  },
  {
    id: "gie-trieng",
    name: "Giẻ-Triêng",
    image: "/assets/Gié-Triêng.avif",
    enName: "Gie Trieng",
    population: 100000,
    regions: ["Quảng Nam", "Quảng Ngãi"],
    description: "Dân tộc Giẻ-Triêng sống ở vùng Tây Quảng Nam và Quảng Ngãi.",
    language: "Tiếng Giẻ-Triêng",
    hint: "Giữ được tục cõng củi cưới chồng rất độc đáo. Sống ở vùng cao biên giới giáp Nam Lào, việc tiếp cận y tế hiện đại và học chữ còn rất nhiều cản trở.",
    color: "#1E90FF"
  },
  {
    id: "xo-dang",
    name: "Xơ Đăng",
    image: "/assets/Xơ Đăng.avif",
    enName: "Xo Dang",
    population: 150000,
    regions: ["Kon Tum", "Gia Lai"],
    description: "Dân tộc Xơ Đăng sống ở vùng tây nguyên, gồm nhiều nhóm có ngôn ngữ khác nhau.",
    language: "Tiếng Xơ Đăng",
    hint: "Sinh sống quanh núi Ngọc Linh, văn hóa phong phú. Kinh tế phụ thuộc vào rẫy, cần hỗ trợ thêm về kỹ thuật nông nghiệp hiện đại và tủ thuốc y tế bản.",
    color: "#4169E1"
  },
  {
    id: "bahnar",
    name: "Bahnar",
    enName: "Bahnar",
    population: 150000,
    regions: ["Gia Lai", "Kon Tum", "Đắk Lắk"],
    description: "Dân tộc Bahnar sống ở vùng tây nguyên, có nền văn hóa liên quan đến nông nghiệp.",
    language: "Tiếng Bahnar",
    image: "/assets/Brao.avif",
    hint: "Tên gợi nhớ thời xa xưa khi còn sống tự do ở rừng Tây Nguyên. Dù vậy, rừng cạn kiệt khiến tục thứ túi bảo vệ tinh thần lành mạnh dần lụi tàn.",
    color: "#9370DB"
  },
  {
    id: "co-ho",
    name: "Cơ Ho",
    enName: "Co Ho",
    population: 250000,
    regions: ["Đắk Lắk", "Lâm Đồng", "Đắk Nông"],
    description: "Dân tộc Cơ Ho sống ở vùng tây nguyên, là dân tộc khá đông ở khu vực này.",
    language: "Tiếng Cơ Ho",
    image: "/assets/Cơ Ho.avif",
    hint: "Xưa nay đều là những bậc thầy trồng quế ở núi Trà Bồng. Đường núi dốc cheo leo khiến y tế dự phòng chưa được tiếp cận đầy đủ khi ốm đau.",
    color: "#8B008B"
  },
{
    id: "co",
    name: "Co", // Thay thế cho cái "Crú" bị sai trong file cũ
    enName: "Co",
    population: 40000, 
    regions: ["Quảng Ngãi", "Quảng Nam", "Kon Tum"],
    description: "Dân tộc Co (còn gọi là Cor, Col, Cùa, Trầu) sinh sống chủ yếu ở vùng núi sườn đông Trường Sơn. Dân tộc này rất nổi tiếng với nghề trồng quế truyền thống (Quế Trà Bồng) và nghệ thuật múa đấu chiêng.",
    language: "Tiếng Co (thuộc nhóm ngôn ngữ Môn - Khmer)",
    image: "/assets/Co.avif",
    hint: "Xưa nay đều là những bậc thầu trồng quế ở núi Trà Bồng. Đường núi dốc cheo leo khiến y tế dự phòng chưa được tiếp cận đầy đủ khi ốm đau.",
    color: "#6495ED"
  },
  {
    id: "mnong",
    name: "Mnông",
    enName: "Mnong",
    population: 100000,
    regions: ["Đắk Lắk", "Đắk Nông", "Lâm Đồng"],
    description: "Dân tộc Mnông sống ở vùng tây nguyên, nổi tiếng với lễ hội Mộc Châu.",
    image: "/assets/M'nông.avif",
    language: "Tiếng Mnông",
    hint: "Lưu giữ kho tàng sử thi Ot N'drong khổng lồ. Việc thuần dưỡng voi mang lại bản sắc lớn nhưng kinh tế hộ gia đình vẫn eo hẹp, cần nâng cấp trạm y tế.",
    color: "#FF1493"
  },
  {
    id: "xtieng",
    name: "Xtiêng",
    enName: "Xtieng",
    population: 70000,
    regions: ["Đồng Nai", "Tây Ninh"],
    image: "/assets/Xtiêng.avif",
    description: "Dân tộc Xtiêng sống ở vùng đông nam bộ, số lượng dân số ít.",
    language: "Tiếng Xtiêng",
    hint: "Sống quanh vùng Bình Phước, kinh tế mủ cao su giúp đời sống đi lên. Việc bảo tồn nghệ thuật cồng chiêng và lễ hội đâm trâu trong giới trẻ đang là thách thức.",
    color: "#FF4500"
  },
  {
    id: "cho-ro",
    name: "Chơ Ro",
    enName: "Cho Ro",
    population: 70000,
    regions: ["Đắk Lắk", "Đắk Nông"],
    image: "/assets/Chơ Ro.avif",
    description: "Dân tộc Chơ Ro sống ở vùng tây nguyên, có văn hóa liên quan nông nghiệp cồn cây.",
    language: "Tiếng Chơ Ro",
    hint: "Kinh tế đã hội nhập khá tốt ở vùng đất đỏ Đồng Nai. Tuy nhiên, không gian rừng suy giảm khiến các nghi lễ cúng thần lúa (Yang Va) vắng bóng hoàn toàn.",
    color: "#FF6347"
  },
  {
    id: "ro-mam",
    name: "Rơ Mam",
    enName: "Ro Mam",
    population: 10000,
    image: "/assets/Rơ Măm.avif",
    regions: ["Kon Tum"],
    description: "Dân tộc Rơ Mam sống ở Kon Tum, là một trong những dân tộc ít người nhất.",
    language: "Tiếng Rơ Mam",
    hint: "Chỉ còn một làng duy nhất ở biên giới Kon Tum. Nhờ nhà nước, điện đường đã có, kinh tế khá lên nhưng thanh niên không còn ai biết nghề truyền thống.",
    color: "#FFB6C1"
  },
  {
    id: "cao-lan",
    name: "Cao Lan",
    enName: "Cao Lan",
    population: 60000,
    image: "/assets/Cống.avif",
    regions: ["Hà Giang", "Tuyên Quang"],
    description: "Dân tộc Cao Lan sống ở các tỉnh phía bắc, gần biên giới.",
    language: "Tiếng Cao Lan",
    hint: "Góp phần đáng kể trong lịch sử chống thôn tính và chinh phục đất đai ở núi Tây Bắc. Hiện nay, giao thông vẫn hẹp, y tế cơ sở còn yếu, nước sạch khan hiếm từng bản làng.",
    color: "#FFA07A"
  },
  {
    id: "giay",
    name: "Giáy",
    enName: "Giay",
    image: "/assets/Giáy.avif",
    population: 60000,
    regions: ["Lào Cai", "Lai Châu"],
    description: "Dân tộc Giáy sống ở tây bắc Việt Nam, có nền văn hóa độc đáo.",
    language: "Tiếng Giáy",
    hint: "Kinh tế thung lũng lúa nước khá ổn định, người dân giỏi làm lạp xưởng và bánh khảo. Lễ hội Roóng Poọc đang cần được rót vốn để duy trì tổ chức hàng năm.",
    color: "#20B2AA"
  },
  {
    id: "ngai",
    name: "Ngái",
    enName: "Ngai",
    population: 20000,
    regions: ["Hà Giang", "Hải Phòng"],
    description: "Dân tộc Ngái sống ở phía bắc, số lượng nhân khẩu rất ít.",
    language: "Tiếng Ngái",
    image: "/assets/Ngái.avif",
    hint: "Số lượng ít, sống đan xen ở đồng bằng và thạo nghề biển, buôn bán. Đời sống vật chất rất cao nhưng bản sắc văn hóa đã bị đồng hóa mạnh mẽ.",
    color: "#3CB371"
  },
  {
    id: "hre",
    name: "Hre",
    enName: "Hre",
    population: 30000,
    regions: ["Quảng Nam", "Quảng Ngãi"],
    description: "Dân tộc Hre sống ở miền trung, vùng Tây Quảng Ngãi.",
    language: "Tiếng Hre",
    image: "/assets/Hrê.avif",
    hint: "Nổi tiếng với những bộ đàn đá thiêng liêng sườn Đông Trường Sơn. Tỷ lệ suy dinh dưỡng trẻ em còn khá do phụ thuộc nương rẫy nứt nẻ mùa khô.",
    color: "#40E0D0"
  },
  {
    id: "pau-the",
    name: "Pau Thê",
    enName: "Pau The",
    population: 40000,
    regions: ["Tây Ninh", "Bình Phước"],
    description: "Dân tộc Pau Thê sống ở vùng đông bắc phía nam, có nền văn hóa độc đáo.",
    image: "/assets/Pà Thẻn.avif",
    language: "Tiếng Pau Thê",
    hint: "Bí ẩn với lễ hội Nhảy Lửa thiêng liêng khiến du khách ngỡ ngàng. Tuy nhiên kinh tế tự túc là chính, hệ thống y tế chăm sóc sức khỏe còn nhiều khoảng trống.",
    color: "#5F9EA0"
  },
  {
    id: "chu-ru",
    name: "Chu Ru",
    enName: "Chu Ru",
    population: 30000,
    regions: ["Đắk Lắk", "Đắk Nông"],
    description: "Dân tộc Crú sống ở vùng tây nguyên, số lượng dân số nhỏ.",
    image: "/assets/Chu Ru.avif",
    language: "Tiếng Crú",
    hint: "Tài hoa với nghề làm gốm không dùng bàn xoay và làm nhẫn bạc. Cần thêm nguồn lực thương mại để đưa sản phẩm đi xa, cải thiện đời sống.",
    color: "#DC143C"
  },
  {
    id: "ma",
    name: "Mạ",
    enName: "Ma",
    population: 15000,
    regions: ["Đắk Lắk"],
    image: "/assets/Mạ.avif",
    description: "Dân tộc Mạ sống ở Đắk Lắk, là dân tộc ít người.",
    language: "Tiếng Mạ",
    hint: "Từng có truyền thống dệt thổ cẩm rực rỡ bên dòng Đạ Đờng. Đang rất cần được hỗ trợ để mở rộng quy mô kinh tế địa phương và trường học.",
    color: "#AFEEEE"
  },
  {
    id: "o-du",
    name: "Ơ Đu",
    enName: "O Du",
    population: 50000,
    regions: ["Sơn La", "Hòa Bình"],
    image: "/assets/Ơ Đu.avif",
    description: "Dân tộc Ơ Đu sống ở tây bắc Việt Nam, vùng Sơn La.",
    language: "Tiếng Ơ Đu",
    hint: "Dân tộc ít người nhất Việt Nam ở Nghệ An. Nhà cửa và y tế được bao cấp khá ổn định, nhưng số người biết nói tiếng Ơ Đu đếm chưa qua hết ngón tay.",
    color: "#B0E0E6"
  },
  {
    id: "xinh-mun",
    name: "Xinh Mun",
    enName: "Xinh Mun",
    population: 30000,
    image: "/assets/Xinh Mun.avif",
    regions: ["Hòa Bình", "Sơn La"],
    description: "Dân tộc Xinh Mun sống ở tây bắc, nằm gần khu vực Ơ Đu.",
    language: "Tiếng Xinh Mun",
    hint: "Quần cư ở dọc biên giới Việt - Lào. Trẻ em gặp vô vàn khó khăn khi qua suối đến lớp, kinh tế chủ yếu tự cung tự cấp dựa vào hái lượm.",
    color: "#E0FFFF"
  },
  {
    id: "bo-y",
    name: "Bố Y",
    enName: "Bo Y",
    population: 20000,
    image: "/assets/BốY.avif",
    regions: ["Sơn La", "Lai Châu"],
    description: "Dân tộc Bố Y sống ở tây bắc, là dân tộc ít người.",
    language: "Tiếng Bố Y",
    hint: "Có nghề làm thợ mộc và rèn đúc rất khéo léo. Nhìn chung vẫn chật vật về kinh tế do đường sá vận chuyển hàng hóa bị chia cắt bởi đồi núi.",
    color: "#ADD8E6"
  },
  {
    id: "khang",
    name: "Kháng",
    enName: "Khang",
    image: "/assets/Kháng.avif",
    population: 15000,
    regions: ["Sơn La", "Lai Châu"],
    description: "Dân tộc Kháng sống ở tây bắc, gần khu vực Bố Y.",
    language: "Tiếng Kháng",
    hint: "Được mệnh danh là những chủ rái cá giỏi làm thuyền độc mộc Tây Bắc. Sinh kế sông nước bấp bênh, bản làng thiếu trạm y tế chuẩn phòng khi mưa lũ.",
    color: "#87CEEB"
  },
  {
    id: "mang",
    name: "Mảng",
    enName: "Mang",
    population: 20000,
    regions: ["Sơn La", "Hòa Bình"],
    description: "Dân tộc Mảng sống ở tây bắc, vùng rừng sâu.",
    language: "Tiếng Mảng",
    image: "/assets/Mảng.avif",
    hint: "Cư trú ven những con sông nậm Tây Bắc. Rất khó khăn, tỷ lệ đói nghèo còn cao, tiếng nói và văn hóa cổ bị lai tạp mạnh do nghèo đói chi phối.",
    color: "#00BFFF"
  },
  {
    id: "ruck",
    name: "Rục",
    enName: "Ruck",
    population: 50000,
    regions: ["Hà Tĩnh", "Khammouane"],
    description: "Dân tộc Rục sống ở miền trung, vùng biên giới Việt-Lào.",
    language: "Tiếng Rục",
    image: "/assets/Lự.avif",
    hint: "Người phụ nữ Lự nhuộm răng đen và dệt vải cực đỉnh. Mức sống trung bình thấp do xa trung tâm, cần hỗ trợ thêm thuốc men phòng dịch bệnh.",
    color: "#1E90FF"
  },
  {
    id: "pu-peo",
    name: "Pu Péo",
    enName: "Pu Peo",
    population: 70000,
    regions: ["Hà Giang", "Tuyên Quang"],
    description: "Dân tộc Pu Péo sống ở phía bắc, là nhóm dân tộc thiểu số.",
    image: "/assets/Pu Péo.avif",
    language: "Tiếng Pu Péo",
    hint: "Một trong những dân tộc ít người nhất Hà Giang. Đất đai khô cằn, kinh tế tụt hậu, việc giữ gìn tiếng nói riêng đang là cuộc chiến vô cùng gian nan.",
    color: "#00FA9A"
  },
  {
    id: "san-diu",
    name: "Sán Dìu",
    enName: "San Diu",
    population: 100000,
    regions: ["Hà Giang", "Tuyên Quang", "Cao Bằng"],
    description: "Dân tộc Sán Dìu sống ở phía bắc, gần biên giới Trung Quốc.",
    image: "/assets/Sán Dìu.avif",
    language: "Tiếng Sán Dìu",
    hint: "Rất thạo làm ruộng nước và chăn nuôi, đời sống khá giả. Nhưng điệu hát Soọng Cô tuyệt hay nay chỉ còn những bậc cao niên thỉnh thoảng nhớ lại.",
    color: "#3CB371"
  },
  {
    id: "van-kieu",
    name: "Vân Kiều",
    enName: "Van Kieu",
    population: 80000,
    regions: ["Quảng Trị"],
    image: "/assets/Bru-Vân Kiều.avif",
    description: "Dân tộc Vân Kiều sống ở vùng Quảng Trị, gần khu vực của dân tộc Bru.",
    language: "Tiếng Vân Kiều",
    hint: "Di sản tháp gạch và chữ viết đồ sộ. Trường học xây kiên cố nhưng các làng nghề dệt, gốm đang điêu đứng vì ế ẩm, lớp trẻ không mặn mà nối nghiệp.",
    color: "#FF69B4"
  },
  {
    id: "ta-mun",
    name: "Tà Mun",
    enName: "Ta Mun",
    population: 3000,
    regions: ["Tây Ninh", "Bình Phước"],
    image: "/assets/Tà Mun.avif",
    description: "Dân tộc Tà Mun sống ở vùng phía nam, đông bắc Tây Ninh. Là dân tộc ít người với bản sắc văn hóa riêng.",
    language: "Tiếng Tà Mun",
    hint: "Bám rễ trên cao nguyên đá Hoàng Su Phì. Thiếu nước trầm trọng vào mùa khô ảnh hưởng cả kinh tế nương rẫy lẫn vệ sinh sức khỏe cộng đồng.",
    color: "#BA55D3"
  },
];

// Map data for heatmap visualization - Generate heatmap points from province coordinates
export const generateHeatmapData = (
  ethnicGroup: EthnicGroup,
  provinceCoordinates: Record<string, { lat: number; lng: number }>
): { lat: number; lng: number; value: number }[] => {
  return ethnicGroup.regions
    .map((region) => {
      const coord = provinceCoordinates[region];
      if (!coord) return null;
      
      // Calculate density based on population and number of regions
      const density = ethnicGroup.population / (ethnicGroup.regions.length * 1000000);
      
      return {
        lat: coord.lat,
        lng: coord.lng,
        value: Math.min(density, 1), // Clamp between 0 and 1
      };
    })
    .filter((point): point is { lat: number; lng: number; value: number } => point !== null);
};


