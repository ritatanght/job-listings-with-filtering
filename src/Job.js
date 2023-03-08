export default function Job(props) {
  const jobInfo = props.info;
  return (
    <section className="job-post flex">
      <img
        src={jobInfo.logo}
        alt="company logo"
        className="post__company-logo"
      />

      <div className="post__text">
        <div className="post__info-top flex">
          <p className="company-name primary-color">{jobInfo.company}</p>
          {jobInfo.new && <div className="new">new!</div>}
          {jobInfo.featured && <div className="featured">featured</div>}
        </div>
        <a className="job-title dark-color" href="#">
          <h2>{jobInfo.position}</h2>
        </a>
        <div className="post__info-bottom grey-color">
          <p>
            {jobInfo.postedAt}
            <span>·</span>
            {jobInfo.contract}
            <span>·</span>
            {jobInfo.location}
          </p>
        </div>
      </div>
      <hr className="mobile-divider" />
      <div className="tags primary-color flex">
        <div
          className="role"
          onClick={() => props.addFilter("role", jobInfo.role)}
        >
          {jobInfo.role}
        </div>
        <div
          className="level"
          onClick={() => props.addFilter("level", jobInfo.level)}
        >
          {jobInfo.level}
        </div>
        {jobInfo.languages.map((language) => (
          <div
            className="language"
            key={language}
            onClick={() => props.addFilter("languages", language)}
          >
            {language}
          </div>
        ))}
        {jobInfo.tools.map((tool) => (
          <div
            className="tool"
            key={tool}
            onClick={() => props.addFilter("tools", tool)}
          >
            {tool}
          </div>
        ))}
      </div>
    </section>
  );
}
