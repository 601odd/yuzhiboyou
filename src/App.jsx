import imgUrl from './img/Yuzhi-Wave-Weasel.jpg'
import './Yuzhiboyou.scss'
import config from './config.js'
const ImgCard = () => {
	return (
		<div className="reflection-container">
			{Array.from({ length: 100 }, (_, cell) => (
				<span key={cell} className={`reflection-grid-cell reflection-grid-cell-${cell}`}></span>
			))}
			<img src={imgUrl} className="reflection-content"></img>
		</div>
	)
}

export default function Resume() {
	return (
		<div>
			<main>
				<div className="profile">
					<div className="card">
						<ImgCard />
						<h2>
							宇智波鼬 <small>うちはイタチ</small>
						</h2>
						<h3>宇智波一族 晓组织</h3>
						<h5>火之国·木叶隐村</h5>
						<br />
						<p>
							<small>
								宇智波佐助的兄长，特征是黑色长发，从近鼻翼的眼角延伸至眼下的深邃纹路（泪沟），代表「朱雀」的「朱」字戒指，佩戴在右手无名指上，脖子戴有项链。为人沉着冷静，天资聪颖的他，五岁就将家族基本忍术：「火遁」豪火球之术一学就会，七岁以第一名的成绩从忍者学校毕业（六岁入学），八岁时因目睹带土杀光他的同伴而开启写轮眼，十岁晋升为中忍，被称为「天才忍者」，十三岁就当上暗部分队长，是家族的骄傲。不料却突然在一个晚上之内将家族几乎全灭后，离开木叶成为叛忍，并加入「晓」（实则是为了保护木叶而加入晓作为间谍）。他的弟弟宇智波佐助成为家族中唯一的活口，自始不惜一切以杀死他为目标，为族人复仇。
							</small>
						</p>
						<br />
						<p>
							<div>基本信息</div>
							{config.baseInfo.map((item, index) => (
								<a key={index}>{item}</a>
							))}
						</p>
					</div>
				</div>
				<div className="info">
					<div className="card red">
						<h3>人生履历</h3>
						{config.resume.map(item => (
							<div className="block" key={item.name}>
								<h4>
									<a href="#">{item.name}</a>
								</h4>
								<p>{item.intro}</p>
								<ul>
									{item.details.map((item, index) => (
										<li key={index}>{item}</li>
									))}
								</ul>
							</div>
						))}
					</div>

					<div className="card orange">
						<h3>教育经历</h3>
						<div className="block">
							<h4>
								<a href="#">忍者学校</a>
							</h4>
							<p>GPA：4.9（5.0）</p>
							<p>国家级奖学金 * 3 , 获ACM世界总决赛金牌</p>
							<ul>
								<li>同龄人中的佼佼者</li>
								<li>不到一年晋升中忍</li>
							</ul>
						</div>
					</div>

					<div className="card pink">
						<h3>技能点</h3>
						<div className="block">
							<ul className="pills">
								{config.skills.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>
					</div>

					<div className="card green">
						<h3>技术栈</h3>
						<div className="block">
							<ul>
								{config.skillStack.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>
					</div>

					<div className="card teal">
						<h3>查克拉属性</h3>
						<div className="block">
							<ul className="pills">
								{config.chakras.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</main>
			<footer>
				<div>@oddpro</div>
			</footer>
		</div>
	)
}
