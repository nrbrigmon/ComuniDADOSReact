export const geography_options = [ 
	{ file_name:'helio_blocks', display_name: 'Heliopolis - Blocks'},
	{ file_name:'helio_districts', display_name: 'Heliopolis - Districts'},
	{ file_name:'sao_blocks', display_name: 'Sao Francisco - Blocks'},
	{ file_name:'sao_districts', display_name: 'Sao Francisco - Districts'},
];

export const district_metrics = [
	{category:"Social", value:'sequ', max:'75', min:'20', breaks:'20,39.483,44.511,49.54', label:'AGE', legend:'none', alias_name:'Age'},
	{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.465,0.704,0.942', label:'GEN_F', legend:'gender', alias_name:'Gender'},
	{category:"Social", value:'sequ', max:'55', min:'0', breaks:'0,0.1,17.123,34.389', label:'NUM_YR_SP', legend:'none', alias_name:'Years in São Paulo'},
	{category:"Social", value:'sequ', max:'19.858', min:'0', breaks:'0,4.242,10.082,15.922', label:'NUM_YR_HSE', legend:'none', alias_name:'Years in Current Dwelling'},
	{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.16,0.344,0.528', label:'BRTH_SP', legend:'secureA', alias_name:'Native Paulista'},
	{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.498,0.79,0.81', label:'BRTH_REG_NE', legend:'secureA', alias_name:'Non Native Paulista - North-East'},
	{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.05,0.112,0.258', label:'BRTH_REG_S', legend:'secureA', alias_name:'Non Native Paulista - South-Central'},
	{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.05,0.292,0.586', label:'DISP_Y', legend:'secureA', alias_name:'Displacement'},
	{category:"Social", value:'sequ', max:'5.469', min:'0', breaks:'0,0.1,1.281,2.61', label:'NUM_FAM_LOT', legend:'none', alias_name:'Lot Occupation'},
	{category:"Social", value:'sequ', max:'5', min:'0', breaks:'0,2.23,3.431,4.633', label:'NUM_PPL_HSHD', legend:'none', alias_name:'Household Inhabitants'},
	{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.1,0.107,0.231', label:'ED_LVL_0', legend:'secureA', alias_name:'Respondent Education - None'},
	{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.213,0.43,0.648', label:'ED_LVL_1', legend:'secureA', alias_name:'Respondent Education - Elementary'},
	{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.157,0.361,0.566', label:'ED_LVL_2', legend:'secureA', alias_name:'Respondent Education - High School'},
	{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.01,0.091,0.198', label:'ED_LVL_3', legend:'secureA', alias_name:'Respondent Education - Undergraduate Deg.'},
	{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.276,0.523,0.769', label:'ED_LVL_MOT_0', legend:'secureA', alias_name: "Respondent Mother's Education - None"},
	{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.091,0.307,0.522', label:'ED_LVL_MOT_1', legend:'secureA', alias_name: "Respondent Mother's Education - Elementary "},
	{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.01,0.052,0.138', label:'ED_LVL_MOT_2', legend:'secureA', alias_name: "Respondent Mother's Education - High School "},
	{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.01,0.012,0.048', label:'ED_LVL_MOT_3', legend:'secureA', alias_name: "Respondent Mother's Education - Undergraduate Deg."},
	{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.01,0.099,0.301', label:'ED_LVL_MOT_5', legend:'secureA', alias_name: "Respondent Mother's Education - No Information"},
	{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.23,0.456,0.682', label:'ED_LVL_FAT_0', legend:'secureA', alias_name: "Respondent Father's Education - None"},
	{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.048,0.273,0.499', label:'ED_LVL_FAT_1', legend:'secureA', alias_name: "Respondent Father's Education - Elementary"},
	{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.01,0.056,0.144', label:'ED_LVL_FAT_2', legend:'secureA', alias_name: "Respondent Father's Education - High School"},
	{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.01,0.017,0.061', label:'ED_LVL_FAT_3', legend:'secureA', alias_name: "Respondent Father's Education - Undergraduate Deg."},
	{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0,0.003,0.004', label:'ED_LVL_FAT_4', legend:'secureA', alias_name: "Respondent Father's Education - Graduate Deg."},
	{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.09,0.19,0.405', label:'ED_LVL_FAT_5', legend:'secureA', alias_name: "Respondent Father's Education - No Information"},
	{category:"Social", value:'sequ', max:'2.125', min:'0', breaks:'0,0.048,0.889,1.73', label:'NUM_SCH_AGE_CHD', legend:'none', alias_name:'School Age Children'},
	{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.224,0.445,0.666', label:'EMPL_Y', legend:'secureA', alias_name:'Employment'},
	{category:"Social", value:'sequ', max:'2655.269', min:'0', breaks:'0,812.878,1525.882,2238.887', label:'INCOME', legend:'none', alias_name:'Income'},
	{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.046,0.211,0.376', label:'USE_HM_INCM', legend:'secureA', alias_name:'Home Income Generation'},
	{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.001,0.089,0.189', label:'SPCL_NEEDS', legend:'secureA', alias_name:'Special Needs'},
	
	{category:"Physical", value:'sequ', max:'8', min:'1', breaks:'1,2.101,2.876,3.651', label:'NUM_FLR', legend:'none', alias_name:'Building Height'},
	{category:"Physical", value:'sequ', max:'1', min:'0', breaks:'0,0.373,0.652,0.931', label:'RENOV', legend:'secureA', alias_name:'Home Expansion'},
	{category:"Physical", value:'sequ', max:'4', min:'0', breaks:'0,1.967,3.012,3.5', label:'BLDG_QLTY', legend:'none', alias_name:'Building Quality and Physical Consolidation'},
	
	{category:"Urban Livability", value:'sequ', max:'1', min:'0', breaks:'0,0.381,0.681,0.981', label:'SNS_SEC_HSE', legend:'secureA', alias_name:'Sense of Security at Home'},
	{category:"Urban Livability", value:'sequ', max:'1', min:'0', breaks:'0,0.105,0.441,0.776', label:'SNS_SEC_NEI', legend:'secureA', alias_name:'Sense of Security on the Street'},
	{category:"Urban Livability", value:'sequ', max:'1', min:'0', breaks:'0,0.009,0.422,0.834', label:'SNS_GOOD_ACS', legend:'secureA', alias_name:'Sense of Access to Public Services'},
	{category:"Urban Livability", value:'sequ', max:'1', min:'0', breaks:'0,0.1,0.137,0.33', label:'ACS_LDR', legend:'secureA', alias_name:'Sense of Access to Community Leader'},
	{category:"Urban Livability", value:'sequ', max:'11', min:'0', breaks:'0,0.1,2.576,5.738', label:'LIXO_IMM_VIC', legend:'none', alias_name:'Everyday challenge – Trash'},
	{category:"Urban Livability", value:'sequ', max:'17', min:'0', breaks:'0,1,2.939,7.092', label:'DROGA_IMM_VIC', legend:'none', alias_name:'Everyday challenge – Drugs'},
	{category:"Urban Livability", value:'sequ', max:'39', min:'0', breaks:'0,1,10.061,23.036', label:'BARULHO_IMM_VIC', legend:'none', alias_name:'Everyday challenge – Noise Pollution'},
	{category:"Urban Livability", value:'sequ', max:'36', min:'0', breaks:'0,1,8.394,20.023', label:'NADA_IMM_VIC', legend:'none', alias_name:'Everyday challenge – Nothing'},
	{category:"Urban Livability", value:'sequ', max:'4', min:'0', breaks:'0,1,1.152,2.568', label:'ASSAULTO_IMM_VIC', legend:'none', alias_name:'Everyday challenge – Street Assault'},
	{category:"Urban Livability", value:'sequ', max:'5', min:'0', breaks:'0,1,2,3', label:'FUNK_IMM_VIC', legend:'none', alias_name:'Everyday challenge – Funk Street Parties'},
	{category:"Urban Livability", value:'sequ', max:'0.8', min:'0', breaks:'0,0.208,0.457,0.705', label:'CUR_INTENT', legend:'none', alias_name:'Intention'},
	{category:"Urban Livability", value:'sequ', max:'1', min:'0', breaks:'0,0.1,0.086,0.207', label:'POL_AFL', legend:'secureA', alias_name:'Political Affiliation'},
	{category:"Urban Livability", value:'sequ', max:'4', min:'0', breaks:'0,0.755,2.142,3.529', label:'POL_PRIOR_INFRA', legend:'none', alias_name:'Critical Change - Infrastructure and Sanitation'},
	{category:"Urban Livability", value:'sequ', max:'4.333', min:'0', breaks:'0,0.882,2.401,3.92', label:'POL_PRIOR_WST_MGT', legend:'none', alias_name:'Critical Change - Waste Management'},
	{category:"Urban Livability", value:'sequ', max:'3.64', min:'0', breaks:'0,0.669,2.02,3.371', label:'POL_PRIOR_ENV', legend:'none', alias_name:'Critical Change - Environmental Stewardship'},
	{category:"Urban Livability", value:'sequ', max:'4.167', min:'0', breaks:'0,0.774,2.303,3.832', label:'POL_PRIOR_HSG', legend:'none', alias_name:'Critical Change - Housing'},
	{category:"Urban Livability", value:'sequ', max:'4', min:'0', breaks:'0,0.579,1.97,3.36', label:'POL_PRIOR_TTL', legend:'none', alias_name:'Critical Change - Title'}
];

export const blocks_metrics = [
		{category:"Social", value:'sequ', max:'75', min:'20', breaks:'20,36.387,44.594,52.801', label:'AGE', legend:'none', alias_name:'Age'},
		{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.445,0.707,0.969', label:'GEN_F', legend:'gender', alias_name:'Gender'},
		{category:"Social", value:'sequ', max:'55', min:'0', breaks:'0,1.883,18.375,34.867', label:'NUM_YR_SP', legend:'none', alias_name:'Years in São Paulo'},
		{category:"Social", value:'sequ', max:'32', min:'0', breaks:'0,5.491,12.48,19.468', label:'NUM_YR_HSE', legend:'none', alias_name:'Years in Current Dwelling'},
		{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.07,0.333,0.596', label:'BRTH_SP', legend:'secureA', alias_name:'Native Paulista'},
		{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.541,0.81,0.9', label:'BRTH_REG_NE', legend:'secureA', alias_name:'Non Native Paulista - North-East'},
		{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.1,0.139,0.344', label:'BRTH_REG_S', legend:'secureA', alias_name:'Non Native Paulista - South-Central'},
		{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.1,0.234,0.545', label:'DISP_Y', legend:'secureA', alias_name:'Displacement'},
		{category:"Social", value:'sequ', max:'14.625', min:'0', breaks:'0,0.1,1.421,2.981', label:'NUM_FAM_LOT', legend:'none', alias_name:'Lot Occupation'},
		{category:"Social", value:'sequ', max:'7.5', min:'0', breaks:'0,2.344,3.557,4.77', label:'NUM_PPL_HSHD', legend:'none', alias_name:'Household Inhabitants'},
		{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.01,0.1,0.287', label:'ED_LVL_0', legend:'secureA', alias_name:'Respondent Education - None'},
		{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.151,0.427,0.703', label:'ED_LVL_1', legend:'secureA', alias_name: "Respondent Education - Elementary"},
		{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.098,0.352,0.606', label:'ED_LVL_2', legend:'secureA', alias_name: "Respondent Education - High School"},
		{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.01,0.106,0.275', label:'ED_LVL_3', legend:'secureA', alias_name: "Respondent Education - Undergraduate Deg."},
		{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.236,0.522,0.808', label:'ED_LVL_MOT_0', legend:'secureA', alias_name: "Respondent Mother's Education - None"},
		{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.062,0.331,0.599', label:'ED_LVL_MOT_1', legend:'secureA', alias_name: "Respondent Mother's Education - Elementary"},
		{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.001,0.05,0.175', label:'ED_LVL_MOT_2', legend:'secureA', alias_name: "Respondent Mother's Education - High"},
		{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.001,0.014,0.101', label:'ED_LVL_MOT_3', legend:'secureA', alias_name: "Respondent Mother's Education - Undergraduate Deg."},
		{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.01,0.07,0.24', label:'ED_LVL_MOT_5', legend:'secureA', alias_name: "Respondent Mother's Education - No Information"},
		{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.178,0.469,0.76', label:'ED_LVL_FAT_0', legend:'secureA', alias_name: "Respondent Father's Education - None"},
		{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.028,0.286,0.544', label:'ED_LVL_FAT_1', legend:'secureA', alias_name: "Respondent Father's Education - Elementary"},
		{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.01,0.05,0.169', label:'ED_LVL_FAT_2', legend:'secureA', alias_name: "Respondent Father's Education - High"},
		{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.001,0.013,0.075', label:'ED_LVL_FAT_3', legend:'secureA', alias_name: "Respondent Father's Education - Undergraduate Deg."},
		{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0,0.002,0.016', label:'ED_LVL_FAT_4', legend:'secureA', alias_name: "Respondent Father's Education - Graduate Deg."},
		{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.1,0.168,0.411', label:'ED_LVL_FAT_5', legend:'secureA', alias_name: "Respondent Father's Education - No Information"},
		{category:"Social", value:'sequ', max:'4', min:'0', breaks:'0,0.224,1.12,2.016', label:'NUM_SCH_AG', legend:'none', alias_name:'School Age Children'},
		{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.19,0.476,0.761', label:'EMPL_Y', legend:'secureA', alias_name:'Employment'},
		{category:"Social", value:'sequ', max:'7640', min:'0', breaks:'0,857.928,1743.932,2629.936', label:'INCOME', legend:'none', alias_name:'Income'},
		{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.1,0.094,0.237', label:'SPCL_NEEDS', legend:'secureA', alias_name:'Special Needs'},
		{category:"Social", value:'sequ', max:'1', min:'0', breaks:'0,0.1,0.221,0.459', label:'USE_HM_INCM', legend:'secureA', alias_name:'Home Income Generation'},

	{category:"Physical", value:'sequ', max:'8', min:'1', breaks:'1,1.774,2.656,3.537', label:'NUM_FLR', legend:'none', alias_name:'Building Height'},
	{category:"Physical", value:'sequ', max:'1', min:'0', breaks:'0,0.434,0.723,1.011', label:'RENOV', legend:'secureA', alias_name:'Home Expansion'},
	{category:"Physical", value:'sequ', max:'5', min:'0', breaks:'0,2.307,3.139,3.972', label:'BLDG_QLTY', legend:'none', alias_name:'Building Quality and Physical Consolidation'},

	{category:"Urban Livability", value:'sequ', max:'1', min:'0', breaks:'0,0.41,0.719,1.029', legend:'secureA', label:'SNS_SEC_HSE', alias_name:'Sense of Security at Home'},
	{category:"Urban Livability", value:'sequ', max:'1', min:'0', breaks:'0,0.203,0.562,0.922', legend:'secureA', label:'SNS_SEC_NE', alias_name:'Sense of Security on the Street'},
	{category:"Urban Livability", value:'sequ', max:'1', min:'0', breaks:'0,0.124,0.541,0.958', legend:'secureA', label:'SNS_GOOD_ACS', alias_name:'Sense of Access to Public Services'},
	{category:"Urban Livability", value:'sequ', max:'1', min:'0', breaks:'0,0.1,0.205,0.489', legend:'secureA', label:'ACS_LDR', alias_name:'Sense of Access to Community Leader'},
	{category:"Urban Livability", value:'sequ', max:'4', min:'0', breaks:'0,1,2,3', legend:'none', label:'LIXO_IMM_VIC', alias_name:'Everyday challenge – Trash'},
	{category:"Urban Livability", value:'sequ', max:'5', min:'0', breaks:'0,1,2,3', legend:'none', label:'DROGA_IMM_VIC', alias_name:'Everyday challenge – Drugs'},
	{category:"Urban Livability", value:'sequ', max:'8', min:'0', breaks:'0,2,4,6', legend:'none', label:'BARULHO_IMM_VIC', alias_name:'Everyday challenge – Noise Pollution'},
	{category:"Urban Livability", value:'sequ', max:'7', min:'0', breaks:'0,2,4,6', legend:'none', label:'NADA_IMM_V', alias_name:'Everyday challenge – Nothing'},
	{category:"Urban Livability", value:'sequ', max:'3', min:'0', breaks:'0,0.9,1.9,2.9', legend:'none', label:'ASSAULTO_IMM_VIC', alias_name:'Everyday challenge – Street Assault'},
	{category:"Urban Livability", value:'sequ', max:'4', min:'0', breaks:'0,1,2,3', legend:'none', label:'FUNK_IMM_VIC', alias_name:'Everyday challenge – Funk Street Parties'},
	{category:"Urban Livability", value:'sequ', max:'1', min:'0', breaks:'0,0.01,0.097,0.273', legend:'none', label:'POL_AFL', alias_name:'Political Affiliation'},
	{category:"Urban Livability", value:'sequ', max:'1', min:'0', breaks:'0,0.239,0.535,0.831', legend:'secureA', label:'CUR_INTENT', alias_name:'Intention'},
	{category:"Urban Livability", value:'sequ', max:'5', min:'0', breaks:'0,0.638,1.921,3.203', legend:'none', label:'POL_PRIOR_TTL', alias_name:'Critical Change - Title'},
	{category:"Urban Livability", value:'sequ', max:'5', min:'0', breaks:'0,0.813,2.175,3.537', legend:'none', label:'POL_PRIOR_INFRA', alias_name:'Critical Change - Infrastructure and Sanitation'},
	{category:"Urban Livability", value:'sequ', max:'5', min:'0', breaks:'0,1.023,2.552,4.08', legend:'none', label:'POL_PRIOR_WST_MGT', alias_name:'Critical Change - Waste Management'},
	{category:"Urban Livability", value:'sequ', max:'5', min:'0', breaks:'0,0.886,2.279,3.672', legend:'none', label:'POL_PRIOR_ENV', alias_name:'Critical Change - Environmental Stewardship'},
	{category:"Urban Livability", value:'sequ', max:'5', min:'0', breaks:'0,0.918,2.492,4.066', legend:'none', label:'POL_PRIOR_HSG', alias_name:'Critical Change - Housing'}

];