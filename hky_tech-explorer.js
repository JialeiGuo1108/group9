// tech-explorer.js
document.addEventListener('DOMContentLoaded', function() {
  // 获取技术浏览器容器和地图区域
  const container = document.getElementById('tech-explorer');
  const mapContainer = document.getElementById('map-container');
  
  // 创建地图上的技术详情面板（固定在地图上，而不是弹窗）
  const mapDetailPanel = document.createElement('div');
  mapDetailPanel.className = 'map-tech-detail-panel';
  mapDetailPanel.style.display = 'none'; // 初始隐藏
  
  // 将详情面板添加到地图容器中
  mapContainer.appendChild(mapDetailPanel);
  
  // 类别数据
  const categoriesData = [
  { id: "hydraulic", name: "Hydraulic Engineering", icon: "🌊", color: "#4299e1" },
  { id: "ship", name: "Shipbuilding Technology", icon: "🚢", color: "#38b2ac" },
  { id: "printing", name: "Printing Technology", icon: "📜", color: "#ed8936" },
  { id: "agriculture", name: "Agriculture & Tools", icon: "🌾", color: "#68d391" },
  { id: "crafts", name: "Handicrafts", icon: "🧶", color: "#f687b3" }
];
  
  // 技术数据
  const technologiesData = [
    {
      id: 1,
      category: 'hydraulic',
      name: 'Earthen Dam Water Level Control',
      period: 'Sui and Tang Dynasties (581-907)',
      image: 'tech_jpg/1.jpg',
      importance: 5,
      description: 'This is used to regulate the water flow and water level in canal construction to meet different demands such as irrigation, flood control, water supply and shipping.',
      flow: 'South to North',
      keyPoints: true,
      details: 'This technology used layered compacted earth and gravel to build dams across canals, creating stepped water levels. By controlling gate openings, water flow was regulated to maintain navigable depths while preventing flooding. The dam cores were reinforced with woven bamboo mats to resist erosion.'
    },
    {
      id: 2,
      category: 'hydraulic',
      name: 'Multi-level Ship Lock System',
      period: 'Yuan Dynasty (1271-1368)',
      image: 'tech_jpg/2.jpg',
      importance: 5,
      description: 'This system solved elevation differences along the Huitong River section. It became the Grand Canal\'s most crucial hydraulic innovation.',
      flow: 'Northern Innovation',
      keyPoints: true,
      details: 'A series of interconnected lock chambers used gravity-fed water transfer. When a boat entered, upstream gates closed and downstream gates opened, allowing water to equalize between chambers. The system could overcome elevation differences of 4-6 meters per lock, with stone-reinforced gates sealed by wooden beams and hemp rope.'
    },
    {
      id: 3,
      category: 'hydraulic',
      name: 'Narrowing Channels to Flush Sediment',
      period: 'Ming Dynasty (1368-1644)',
      image: 'tech_jpg/3.jpg',
      importance: 4,
      description: 'This technique controlled water flow to scour riverbeds, solving river siltation problems and protecting the Grand Canal\'s navigation.',
      flow: 'Northward Expansion',
      keyPoints: true,
      details: 'Engineers constructed converging levees to narrow river channels, increasing water velocity by 30-50%. This amplified hydraulic scouring force could remove 1-2 meters of sediment annually. Strategic placement of stone "water-breaking teeth" (diverting structures) directed currents to maximize erosion.'
    },
    {
      id: 4,
      category: 'ship',
      name: 'Flat-Bottomed Shallow-Hold Boat',
      period: 'Song Dynasty (960-1279)',
      image: 'tech_jpg/4.jpg',
      importance: 4,
      description: 'A standardized vessel for grain transport during the Northern Song, specifically adapted to northern China\'s shallow rivers. It became one of the primary ship types for Grand Canal transport.',
      flow: 'Southern Technology Adapted to Northern Needs',
      keyPoints: true,
      details: 'Featuring a flat hull (draft <1m) with widened beam-to-length ratio (1:3), these boats displaced water evenly. The shallow hold used transverse bulkheads for stability, while a retractable centerboard improved directional control in currents. Standardized at 30m length for canal lock compatibility.'
    },
    {
      id: 5,
      category: 'ship',
      name: 'Deep-hull Pointed-bottom Boats & Mortise-tenon Joinery',
      period: 'Ming Dynasty (1368-1644)',
      image: 'tech_jpg/5.jpg',
      importance: 4,
      description: 'Ming Dynasty shipyards combined southern and northern shipbuilding techniques, using mortise-tenon joints for hull strength and deep holds for increased capacity, significantly improving transport efficiency.',
      flow: 'North-South Technology Fusion',
      keyPoints: false,
      details: 'V-shaped hulls with 2.5m drafts utilized interlocking mortise-tenon joints (precision-cut wood connections without nails), creating flexible yet watertight seams. The deep cargo hold employed honeycomb partitioning to distribute weight, allowing 50% greater payload than flat-bottomed designs.'
    },
    {
      id: 6,
      category: 'printing',
      name: 'Woodblock Printing',
      period: 'Ming Dynasty (1368-1644)',
      image: 'tech_jpg/6.jpg',
      importance: 4,
      description: 'During the compilation of the Yongle Encyclopedia, southern artisans skilled in woodblock printing were relocated northward, facilitating technological exchange between regions.',
      flow: 'Southern Artisans Transferred North',
      keyPoints: false,
      details: 'Text and images were carved in mirror relief on hardwood blocks (pear/boxwood), with characters raised 2-3mm. Ink was applied with horsehair brushes, then rice paper pressed using a "bamboo beating" technique. Skilled carvers could produce 50-80 characters daily with 0.1mm precision.'
    },
    {
      id: 7,
      category: 'printing',
      name: 'Color-printed Woodblock Technique',
      period: 'Ming and Qing Dynasties (1368-1912)',
      image: 'tech_jpg/7.jpg',
      importance: 3,
      description: 'This color-printing technology stimulated the development of Liaocheng woodblock New Year prints and further dissemination by canal merchants.',
      flow: 'Jiangnan(South) to North',
      keyPoints: false,
      details: 'Each color required a separate carved block, aligned using "register marks" (十字规矩). Masters mixed mineral pigments with glutinous rice paste for vibrant hues. The "gradient wash" technique applied ink unevenly across blocks to create shading effects, requiring 6-12 precise overlays per print.'
    },
    {
      id: 8,
      category: 'agriculture',
      name: 'Water-powered Spinning Wheel',
      period: 'Yuan Dynasty (1271-1368)',
      image: 'tech_jpg/8.jpg',
      importance: 3,
      description: 'Recorded in Wang Zhen\'s "Agricultural Treatise," this hydro-mechanical spinning technology dramatically improved textile production efficiency in Jiangnan.',
      flow: 'North to South',
      keyPoints: false,
      details: 'A horizontal waterwheel (3-4m diameter) drove a belt system that rotated 32 spindles simultaneously. The automatic yarn guide used a reciprocating lever mechanism, allowing one operator to produce 1.5kg of thread daily—10x manual spinning output. Flax and cotton required different spindle speeds (200 vs 150 RPM).'
    },
    {
      id: 9,
      category: 'agriculture',
      name: 'River Desilting Tool: Dredging Rake',
      period: 'Song and Yuan Transition (1127-1279)',
      image: 'tech_jpg/9.jpg',
      importance: 3,
      description: 'Invented in the Song Dynasty for specialized river dredging, this tool was later deployed for Grand Canal maintenance during the Yuan Dynasty, becoming essential for waterway upkeep.',
      flow: 'System-wide Adoption',
      keyPoints: false,
      details: 'The 8m-wide iron rake had 32 curved tines spaced 15cm apart, dragged by two boats in parallel. Its weight (300kg) forced tines 1m into sediment, while the curved design lifted debris onto collection barges. Teams could clear 200m³ of silt daily, with adjustable tine angles for different soil densities.'
    },
    {
      id: 10,
      category: 'crafts',
      name: 'White Porcelain Glaze & Firing Technique',
      period: 'Northern Song Dynasty (960-1127)',
      image: 'tech_jpg/10.jpg',
      importance: 4,
      description: 'Ding kiln white porcelain technology profoundly influenced Longquan celadon development and drove technical transformations in greenware production.',
      flow: 'North to South',
      keyPoints: true,
      details: 'Using a kaolin-clay body fired at 1280°C with a lime-alkali glaze (CaO:K₂O ratio 2:1). The glaze contained 5% iron oxide, but reduction firing (smoke-rich atmosphere) converted Fe³⁺ to Fe²⁺, eliminating yellow tints. "Mouth-down" stacking in saggar containers prevented ash contamination during 30-hour kiln cycles.'
    },
    {
      id: 11,
      category: 'crafts',
      name: 'Cobalt Blue Pigment for Blue-and-white Porcelain',
      period: 'Yuan Dynasty (1271-1368)',
      image: 'tech_jpg/11.jpg',
      importance: 5,
      description: 'Imported cobalt pigment fueled Jingdezhen\'s blue-and-white porcelain boom, making it China\'s dominant ceramic style through widespread adoption of this technique.',
      flow: 'South to North',
      keyPoints: true,
      details: 'Persian cobalt (containing 2-5% manganese and arsenic) produced deeper blues than domestic ores. The pigment was ground to 5μm particles, mixed with gum arabic, and painted underglaze. Fired at 1300°C, the cobalt formed spinel crystals (CoAl₂O₄), with manganese creating characteristic "heavenly blue" halos around designs.'
    },
    {
      id: 12,
      category: 'crafts',
      name: 'Porcelain-making Technique',
      period: 'Yuan, Ming and Qing Period (1271-1644)',
      image: 'tech_jpg/1.jpg',
      importance: 4,
      description: 'Refined porcelain techniques profoundly impacted northern ceramic industries through technical exchanges.',
      flow: 'South to North',
      keyPoints: false,
      details: 'Southern workshops pioneered high-temperature (1350°C) firing of kaolin-rich clay bodies, achieving <0.5% porosity. The northern "sand-clay" method blended local soils with crushed quartz (3:1 ratio) for thermal shock resistance. Glaze recipes traveled with kiln masters, adapting to regional materials—e.g., using lead-fluxed glazes where ash was scarce.'
    },
    {
      id: 13,
      category: 'crafts',
      name: 'Huang Daopo\'s Cotton Spinning Technique',
      period: 'Yuan Dynasty (1271-1368)',
      image: 'tech_jpg/13.jpg',
      importance: 4,
      description: 'The fusion of southern cotton spinning and northern hemp weaving techniques birthed specialty industries like "Wei Cloth," exemplifying technological synthesis.',
      flow: 'North-South Integration',
      keyPoints: false,
      details: 'Introduced a foot-operated three-spindle wheel (1.2m diameter) with hemp belt transmission, allowing simultaneous spinning and yarn winding. The "double-roller gin" separated seeds using intermeshing bronze rollers (0.5mm gap). Warping frames arranged 500+ threads at precise tensions for dense, even weaves unattainable with hand-spun yarn.'
    },
    {
      id: 14,
      category: 'crafts',
      name: 'Silk Weaving Technique',
      period: 'Yuan Dynasty (1271-1368)',
      image: 'tech_jpg/14.jpg',
      importance: 3,
      description: 'Artisans from Hangzhou\'s imperial silk workshops drove the development of advanced silk techniques in neighboring regions.',
      flow: 'Regional Dissemination',
      keyPoints: false,
      details: 'The "drawloom" used 1,800+ heddles controlled by a second weaver pulling pattern cords, enabling 60 weft threads/cm density. Silk threads were degummed in enzyme baths (papaya/persimmon tannin) for uniformity. Gold-wrapped threads (0.1mm gold leaf on silk core) required specialized "tapestry shuttle" looms with tension regulators.'
    },
    {
      id: 15,
      category: 'crafts',
      name: 'Huzhou Calligraphy Brush-making',
      period: 'Ming Dynasty (1368-1644)',
      image: 'tech_jpg/15.jpg',
      importance: 3,
      description: 'Huzhou brushmakers established workshops in northern cities, spreading scholarly implements\' craftsmanship.',
      flow: 'South to North',
      keyPoints: false,
      details: 'Selective blending of weasel, goat, and rabbit hairs (3:5:2 ratio) created tips with ideal flexibility. Hairs were "aligned-root" bundled using lacquer glue, inserted into bamboo shafts with deer horn ferrules. The 72-step process included "moonlight drying" to preserve natural oils for ink absorption.'
    },
    {
      id: 16,
      category: 'crafts',
      name: 'Suzhou Embroidery Technique',
      period: 'Ming and Qing Dynasties (1368-1912)',
      image: 'tech_jpg/16.jpg',
      importance: 3,
      description: 'Suzhou embroidery methods influenced Hangzhou, creating distinctive "Hang Embroidery" styles that enriched textile arts.',
      flow: 'Jiangnan Regional Spread',
      keyPoints: false,
      details: 'Used silk threads split to 1/64th diameter (0.01mm), with "seed stitch" (0.3mm length) achieving photorealistic shading. The "double-faced" technique hid knots by threading needles mid-fiber. Gold-wrapped threads were couched using hair-fine stitches (8/cm), requiring magnifiers and north-light positioning for precision.'
    },
    {
      id: 17,
      category: 'crafts',
      name: 'Linqing Woodblock New Year Print Technique',
      period: 'Ming and Qing Dynasties (1368-1912)',
      image: 'tech_jpg/17.jpg',
      importance: 3,
      description: 'Linqing printing methods catalyzed northern New Year print art\'s golden age through technical exchanges.',
      flow: 'Northward Along Canal',
      keyPoints: false,
      details: 'Pearwood blocks were carved with "knife-on-side" technique (45° blade angle) to create 0.2mm relief lines. Prints used vegetable dyes (indigo, gardenia) mixed with alum mordant. The "overprint registration" system allowed ±0.3mm alignment across 6-color layers, with hand-painted gold accents on select editions.'
    },
    {
      id: 18,
      category: 'crafts',
      name: 'Purple Clay Teapot: Yixing Zisha Teapot',
      period: 'Ming and Qing Dynasties (1368-1912)',
      image: 'tech_jpg/18.jpg',
      importance: 3,
      description: 'Yixing purple clay ware stimulated local ceramic innovations in northern centers through its distinctive techniques.',
      flow: 'Trade-driven Northward Spread',
      keyPoints: false,
      details: 'Made from iron-rich zisha clay (15% Fe₂O₃) fired at 1180°C in oxidizing atmosphere. The unglazed surface developed micropores that absorbed tea oils. Hand-beaten construction (no wheel throwing) created 2mm-thick walls with stone-polished surfaces. Teapot shapes were mathematically optimized for heat retention (1°C/min cooling rate).'
    }
];

  // 使用原生JavaScript构建UI
  function createTechExplorer() {
    
    // 创建主容器
    const explorerContainer = document.createElement('div');
explorerContainer.className = 'grand-canal-explorer';

    // 在这里添加标题栏的创建代码
    // 创建标题栏
    const header = document.createElement('div');
    header.className = 'explorer-header';

    const title = document.createElement('h1');
    title.textContent = 'Technology Dissemination';
    header.appendChild(title);

    explorerContainer.appendChild(header);
    
    // 直接添加分类标签作为第一个元素
    const tabs = document.createElement('div');
    tabs.className = 'explorer-tabs';
    
    const allTab = document.createElement('div');
    allTab.className = 'tab active';
    allTab.textContent = 'All';
    allTab.dataset.category = 'all';
    tabs.appendChild(allTab);
    
    // 添加各个分类标签
    categoriesData.forEach(category => {
      const tab = document.createElement('div');
      tab.className = 'tab';
      tab.textContent = `${category.icon} ${category.name}`;
      tab.dataset.category = category.id;
      tabs.appendChild(tab);
    });
    
    explorerContainer.appendChild(tabs);
    
    // 添加内容区域
    const content = document.createElement('div');
    content.className = 'explorer-content';
    explorerContainer.appendChild(content);
    
    // 将整个容器添加到页面
    container.appendChild(explorerContainer);
    
    // 当前选中的分类和搜索文本
    let currentCategory = 'all';
    let selectedTech = null;
    
    // 渲染技术卡片
    function renderTechCards() {
      // 筛选技术，只按类别筛选
      const filteredTech = technologiesData.filter(tech => {
        return currentCategory === 'all' || tech.category === currentCategory;
      });
      
      // 按重要性排序
      const sortedTech = [...filteredTech].sort((a, b) => b.importance - a.importance);
      
      // 清空内容区
      content.innerHTML = '';
      
      // 添加技术卡片
      sortedTech.forEach(tech => {
        const techCard = document.createElement('div');
        techCard.className = 'tech-card';
        techCard.dataset.id = tech.id;
        
        const techCardHeader = document.createElement('div');
        techCardHeader.className = 'tech-card-header';
        
        const techCardTitle = document.createElement('h4');
        techCardTitle.className = 'tech-card-title';
        techCardTitle.textContent = tech.name;
        
        if (tech.keyPoints) {
          const keyPointBadge = document.createElement('span');
          keyPointBadge.className = 'key-point-badge';
          keyPointBadge.textContent = 'Key technologies';
          techCardTitle.appendChild(keyPointBadge);
        }
        
        techCardHeader.appendChild(techCardTitle);
        techCard.appendChild(techCardHeader);
        
        const techCardBody = document.createElement('div');
        techCardBody.className = 'tech-card-body';
        
        const techCardMeta = document.createElement('div');
        techCardMeta.className = 'tech-card-meta';
        
        const techCategory = categoriesData.find(c => c.id === tech.category);
        const categoryText = document.createElement('span');
        categoryText.textContent = `${techCategory.icon} ${techCategory.name}`;
        techCardMeta.appendChild(categoryText);
        
        const periodText = document.createElement('span');
        periodText.textContent = tech.period;
        techCardMeta.appendChild(periodText);
        
        techCardBody.appendChild(techCardMeta);
        
        const techCardDesc = document.createElement('div');
        techCardDesc.className = 'tech-card-desc';
        techCardDesc.textContent = tech.description;
        techCardBody.appendChild(techCardDesc);
        
        techCard.appendChild(techCardBody);
        content.appendChild(techCard);
        
        // 添加点击事件
        techCard.addEventListener('click', () => showTechDetail(tech));
      });
      
      // 没有结果时显示提示
      if (sortedTech.length === 0) {
        const noResult = document.createElement('div');
        noResult.style.padding = '20px';
        noResult.style.textAlign = 'center';
        noResult.style.color = '#8c6c4a';
        noResult.textContent = '没有找到匹配的技术';
        content.appendChild(noResult);
      }
    }
    
    // 显示技术详情 - 在地图右侧面板中显示，而非弹窗
    function showTechDetail(tech) {
    selectedTech = tech;
    
    // 清空并设置详情面板内容
    mapDetailPanel.innerHTML = '';
    
    // 添加关闭按钮
    const closeButton = document.createElement('button');
    closeButton.className = 'map-detail-close';
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', () => {
        mapDetailPanel.style.display = 'none';
        // 通知地图取消高亮
        const event = new CustomEvent('techDeselected', {});
        window.dispatchEvent(event);
    });
    mapDetailPanel.appendChild(closeButton);
    
    // 添加标题
    const title = document.createElement('h3');
    title.className = 'map-detail-title';
    title.textContent = tech.name;
    mapDetailPanel.appendChild(title);
    
    // 添加元数据
    const metaContainer = document.createElement('div');
    metaContainer.className = 'map-detail-meta';
    
    // 添加分类标签
    const techCategory = categoriesData.find(c => c.id === tech.category);
    const categoryMeta = document.createElement('span');
    categoryMeta.className = 'map-detail-meta-item';
    categoryMeta.textContent = `${techCategory.icon} ${techCategory.name}`;
    metaContainer.appendChild(categoryMeta);
    
    // 添加时期标签
    const periodMeta = document.createElement('span');
    periodMeta.className = 'map-detail-meta-item';
    periodMeta.textContent = tech.period;
    metaContainer.appendChild(periodMeta);
    
    // 添加流向标签
    const flowMeta = document.createElement('span');
    flowMeta.className = 'map-detail-meta-item';
    flowMeta.textContent = tech.flow;
    metaContainer.appendChild(flowMeta);
    
    // 添加重点技术标签
    if (tech.keyPoints) {
        const keyPointMeta = document.createElement('span');
        keyPointMeta.className = 'map-detail-meta-item';
        keyPointMeta.style.backgroundColor = '#c17f40';
        keyPointMeta.style.color = 'white';
        keyPointMeta.textContent = 'Key technologies';
        metaContainer.appendChild(keyPointMeta);
    }
    
    mapDetailPanel.appendChild(metaContainer);
    
    // 添加图片
    const imageContainer = document.createElement('div');
    imageContainer.className = 'map-detail-image';
    const image = document.createElement('img');
    image.src = tech.image;
    image.alt = tech.name;
    imageContainer.appendChild(image);
    mapDetailPanel.appendChild(imageContainer);
    
    // 添加描述
    const descContainer = document.createElement('div');
    descContainer.className = 'map-detail-desc';
    descContainer.innerHTML = `<strong>Description：</strong>${tech.description}`;
    mapDetailPanel.appendChild(descContainer);
    
    // 添加流向详情
    const flowContainer = document.createElement('div');
    flowContainer.className = 'map-detail-flow';
    
    const flowTitle = document.createElement('div');
    flowTitle.className = 'map-detail-flow-title';
    flowTitle.textContent = `Flow：${tech.flow}`;
    flowContainer.appendChild(flowTitle);
    
    const flowContent = document.createElement('div');
    flowContent.className = 'map-detail-flow-content';
    flowContent.textContent = tech.details;
    flowContainer.appendChild(flowContent);
    
    mapDetailPanel.appendChild(flowContainer);
    
    // 显示详情面板
    mapDetailPanel.style.display = 'block';
    
    // 通知地图高亮该技术路线
    notifyMapHighlight(tech);
}
    
    // 通知地图高亮显示对应技术路线
    function notifyMapHighlight(tech) {
    // 创建自定义事件，传递更多信息帮助地图精确匹配
    const event = new CustomEvent('techSelected', {
        detail: {
            techId: tech.id,
            techName: tech.name,
            category: tech.category,
            period: tech.period,
            // 添加期间映射，因为地图上的朝代名称可能与技术数据中的略有不同
            mappedPeriod: mapPeriodName(tech.period)
        }
    });
    
    // 触发事件
    window.dispatchEvent(event);
}

// 添加一个映射函数，将技术数据中的时期名称映射到地图数据中使用的名称
function mapPeriodName(period) {
    const periodMapping = {
        'Sui Dynasty': 'Sui and Tang Dynasties (581-907)',
        'Tang Dynasty': 'Sui and Tang Dynasties (581-907)',
        'Song Dynasty': 'Song Dynasty (960-1279)',
        'Northern Song Dynasty': 'Northern Song Dynasty (960-1127)',
        'Song-Yuan Dynasties': 'Song and Yuan Transition (1127-1279)',
        'Yuan Dynasty': 'Yuan Dynasty (1271-1368)',
        'Ming Dynasty': 'Ming Dynasty (1368-1644)',
        'Ming-Qing Dynasties': 'Ming and Qing Dynasties (1368-1912)',
        'Yuan-Ming Dynasties': 'Yuan Dynasty (1271-1368)',
        'Song-Yuan-Ming-Qing Dynasties': 'Yuan, Ming and Qing Period (1271-1644)'
    };
    
    return periodMapping[period] || period;
}
    
    // 分类标签点击事件
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('tab')) {
        // 移除所有active类
        document.querySelectorAll('.tab').forEach(tab => {
          tab.classList.remove('active');
        });
        
        // 添加active类到点击的标签
        e.target.classList.add('active');
        
        // 更新当前分类
        currentCategory = e.target.dataset.category;
        
        // 重新渲染
        renderTechCards();
      }
    });
    
    // 监听从地图发来的技术选择事件
    window.addEventListener('mapTechSelected', (e) => {
      const techId = e.detail.techId;
      const tech = technologiesData.find(t => t.id === techId);
      
      if (tech) {
        showTechDetail(tech);
      }
    });
    
    // 监听从地图发来的技术名称选择事件（备用方法）
    window.addEventListener('mapTechNameSelected', (e) => {
      const techName = e.detail.techName;
      const tech = technologiesData.find(t => t.name === techName);
      
      if (tech) {
        showTechDetail(tech);
      }
    });
    
    // 初次渲染
    renderTechCards();
  }
  
  // 执行创建
  if (container) {
    createTechExplorer();
    console.log('大运河技术可视化组件已创建');
  } else {
    console.error('未找到技术浏览器容器元素');
  }
});