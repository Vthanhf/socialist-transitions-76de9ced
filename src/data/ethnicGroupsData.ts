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
    color: "#C7CEEA"
  },
  {
    id: "ede",
    name: "Ê Đê",
    enName: "Ede",
    population: 350000,
    regions: ["Đắk Lắk", "Lâm Đồng"],
    description: "Dân tộc Ê Đê sống chủ yếu ở vùng tây nguyên, có nền văn hóa độc đáo. Nổi tiếng với lễ hội Ốc Om Ốc mang tính cộng đồng cao.",
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
    language: "Tiếng Gia Rai",
    color: "#FCBAD3"
  },
  {
    id: "mong",
    name: "Mông",
    enName: "Hmong",
    population: 1000000,
    regions: ["Yên Bái", "Sơn La", "Lai Châu", "Điện Biên", "Lào Cai", "Tuyên Quang"],
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
    description: "Dân tộc Dao phân bố rải rác ở vùng cao phía bắc Việt Nam. Có nhiều chi tộc khác nhau với những khác biệt về phong tục và trang phục.",
    language: "Tiếng Dao",
    color: "#FFAFCC"
  },
  {
    id: "lao",
    name: "Lào",
    enName: "Lao",
    population: 400000,
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
    regions: ["Yên Bái", "Lào Cai", "Tuyên Quang"],
    description: "Dân tộc Lô Lô có số lượng nhỏ, phân bố ở các huyện cao nguyên. Là dân tộc ít người nhưng có nền văn hóa độc đáo.",
    language: "Tiếng Lô Lô",
    color: "#B5EAD7"
  },
  {
    id: "san-chay",
    name: "Sán Chay",
    enName: "San Chay",
    population: 150000,
    regions: ["Tuyên Quang", "Thái Nguyên", "Bắc Kạn"],
    description: "Dân tộc Sán Chay sinh sống ở các vùng cao, gần biên giới Trung Quốc. Có phong tục ăn Tết rất độc đáo.",
    language: "Tiếng Sán Chay",
    color: "#C1E1EC"
  },
  {
    id: "kho-mu",
    name: "Kho Mú",
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
    color: "#98D8C8"
  },
  {
    id: "phu-la",
    name: "Phủ Lá",
    enName: "Phu La",
    population: 20000,
    regions: ["Sơn La", "Lai Châu"],
    description: "Dân tộc Phủ Lá là một nhóm dân tộc nhỏ phân bố ở tây bắc. Có nền văn hóa riêng biệt giữa các dân tộc miền núi.",
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
    language: "Tiếng Hùng",
    color: "#FFA07A"
  },
  {
    id: "raglai",
    name: "Ra Glai",
    enName: "Ra Glai",
    population: 50000,
    regions: ["Ninh Thuận", "Bình Thuận"],
    description: "Dân tộc Ra Glai sinh sống ở vùng miền trung nam Việt Nam. Có nền kinh tế chủ yếu dựa trên nông nghiệp.",
    language: "Tiếng Ra Glai",
    color: "#F5DEB3"
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

// Province center coordinates and approximate ethnic group distributions
export const provinceCoordinates: Record<string, { lat: number; lng: number }> = {
  "Hà Nội": { lat: 21.0285, lng: 105.8542 },
  "Hồ Chí Minh": { lat: 10.7769, lng: 106.7009 },
  "Đà Nẵng": { lat: 16.0544, lng: 108.2022 },
  "Cần Thơ": { lat: 10.0282, lng: 105.7845 },
  "Hải Phòng": { lat: 20.8449, lng: 106.6881 },
  "Lào Cai": { lat: 22.3402, lng: 103.9754 },
  "Yên Bái": { lat: 21.7224, lng: 104.9113 },
  "Cao Bằng": { lat: 22.8655, lng: 106.2597 },
  "Bắc Kạn": { lat: 22.1828, lng: 105.8356 },
  "Tuyên Quang": { lat: 21.8081, lng: 105.2147 },
  "Lạng Sơn": { lat: 21.8536, lng: 106.7616 },
  "Bắc Giang": { lat: 21.2833, lng: 106.2 },
  "Thái Nguyên": { lat: 21.5959, lng: 105.8581 },
  "Hải Dương": { lat: 20.9433, lng: 106.3258 },
  "Hưng Yên": { lat: 20.6558, lng: 106.0546 },
  "Hà Nam": { lat: 20.5420, lng: 105.920 },
  "Nam Định": { lat: 20.4265, lng: 106.1615 },
  "Ninh Bình": { lat: 20.2553, lng: 105.9773 },
  "Thanh Hóa": { lat: 19.8074, lng: 105.7857 },
  "Nghệ An": { lat: 19.3216, lng: 104.9854 },
  "Hà Tĩnh": { lat: 18.3421, lng: 105.9107 },
  "Quảng Bình": { lat: 17.4729, lng: 106.6045 },
  "Quảng Trị": { lat: 16.8433, lng: 107.1921 },
  "Thừa Thiên-Huế": { lat: 16.4637, lng: 107.5906 },
  "Quảng Nam": { lat: 15.5394, lng: 108.5238 },
  "Quảng Ngãi": { lat: 15.1203, lng: 108.7879 },
  "Bình Định": { lat: 14.1435, lng: 108.8448 },
  "Phú Yên": { lat: 13.1939, lng: 109.2012 },
  "Khánh Hòa": { lat: 12.2381, lng: 109.1967 },
  "Ninh Thuận": { lat: 11.5881, lng: 109.1750 },
  "Bình Thuận": { lat: 11.5564, lng: 108.1089 },
  "Kon Tum": { lat: 14.9708, lng: 107.9844 },
  "Gia Lai": { lat: 13.9833, lng: 107.9833 },
  "Đắk Lắk": { lat: 12.6843, lng: 108.0347 },
  "Đắk Nông": { lat: 11.9436, lng: 107.6030 },
  "Lâm Đồng": { lat: 11.9404, lng: 108.4453 },
  "An Giang": { lat: 10.5920, lng: 104.7237 },
  "Kiên Giang": { lat: 10.0153, lng: 104.7661 },
  "Cà Mau": { lat: 9.1768, lng: 104.7505 },
  "Bạc Liêu": { lat: 9.2960, lng: 105.7207 },
  "Sóc Trăng": { lat: 9.5965, lng: 105.9778 },
  "Trà Vinh": { lat: 9.9308, lng: 106.3407 },
  "Vĩnh Long": { lat: 10.2418, lng: 105.9677 },
  "Hậu Giang": { lat: 9.7765, lng: 105.3435 },
  "Tiền Giang": { lat: 10.3674, lng: 106.3619 },
  "Long An": { lat: 10.5414, lng: 106.2045 },
  "Đồng Nai": { lat: 10.9629, lng: 107.0601 },
  "Bà Rịa-Vũng Tàu": { lat: 10.2252, lng: 107.0618 },
  "Bình Dương": { lat: 11.3067, lng: 106.6267 },
  "Sơn La": { lat: 21.3256, lng: 103.9181 },
  "Lai Châu": { lat: 22.0415, lng: 103.4740 },
  "Điện Biên": { lat: 21.3868, lng: 103.0251 },
  "Hòa Bình": { lat: 20.8139, lng: 105.3380 },
  "Vĩnh Phúc": { lat: 21.2845, lng: 105.6860 },
  "Hà Sơn Bình": { lat: 20.8139, lng: 105.3380 },
  "Hà Giang": { lat: 22.8038, lng: 104.9747 },
};
