import GitHubCalendar from 'react-github-calendar';
import LeetcodeCalendar from 'leetcode-stats';

export default function CpSection() {
  return (
    <div>
      <section className="skills-container">
        <GitHubCalendar  username="T-Rahul-prabhu-38" />
      </section>
      <LeetcodeCalendar username="trahulprabhu38" />
    </div>
  );
}
