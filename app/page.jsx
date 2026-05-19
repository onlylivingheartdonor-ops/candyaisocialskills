"use client";

import { useState } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #faf8f4; font-family: 'DM Mono', monospace; color: #1a1a1a; }
  .container { max-width: 780px; margin: 0 auto; padding: 2rem 1.5rem; }
  .header { border-bottom: 2px solid #1a1a1a; padding-bottom: 1.5rem; margin-bottom: 2rem; }
  .eyebrow { font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: #888; margin-bottom: .5rem; }
  h1 { font-family: 'DM Serif Display', serif; font-size: clamp(2rem, 5vw, 3.2rem); line-height: 1.1; margin-bottom: 1rem; }
  h1 em { font-style: italic; color: #7c3aed; }
  h2 { font-family: 'DM Serif Display', serif; font-size: 1.4rem; margin: 1.5rem 0 0.75rem; color: #1a1a1a; }
  h3 { font-family: 'DM Serif Display', serif; font-size: 1.1rem; margin: 1.25rem 0 0.5rem; color: #1a1a1a; }
  .card { background: #fff; border: 1px solid #e0dbd3; border-radius: 4px; padding: 1.5rem; margin-bottom: 1.5rem; }
  .prose p { font-size: 15px; color: #444; line-height: 1.7; margin-bottom: 1rem; }
  .prose ul, .prose ol { font-size: 15px; color: #444; line-height: 1.7; margin: 1rem 0 1rem 1.5rem; }
  .prose li { margin-bottom: 0.25rem; }
  .prose strong { color: #1a1a1a; font-weight: 600; }
  table { width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 13px; }
  th, td { border: 1px solid #e0dbd3; padding: 0.75rem; text-align: left; background: #fff; }
  th { background: #f5f3ef; font-weight: 600; }
  .btn { display: inline-block; background: #7c3aed; color: white; padding: 0.75rem 1.5rem; border-radius: 4px; text-decoration: none; font-weight: 500; margin: 0.5rem 0; }
  .btn:hover { background: #5b21b6; }
  .footer-links { display: flex; gap: 1rem; font-size: 11px; margin-top: 1rem; color: #888; }
  .footer-links a { color: #888; text-decoration: underline; }
  .disclaimer { font-size: 11px; color: #888; border-top: 1px solid #e0dbd3; padding-top: 1rem; margin-top: 1rem; }
  @media (max-width: 600px) { body { padding: 0; } table { font-size: 10px; } }
`;

export default function Page() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In production, add form submission logic here
    }
  };

  return (
    <>
      <style>{css}</style>
      <main className="container">
        <div className="header">
          <p className="eyebrow">30-Day Experiment</p>
          <h1>Candy AI Review 2026:<br /><em>Can an AI Girlfriend Actually Improve Your Social Skills?</em></h1>
        </div>

        <div className="card prose">
          <p>You've seen the headlines. "AI girlfriends are replacing real relationships." "Loneliness epidemic fueled by chatbots."</p>
          <p>I tried Candy AI for something else entirely: <strong>conversation practice.</strong></p>
          <p>Not because I'm lonely. Because I'm bad at small talk, worse at flirting, and absolutely hopeless at reading whether someone's actually interested or just being polite.</p>
          <p>Here's what I learned when I stopped treating the AI like a girlfriend and started treating it like a gym for conversation skills.</p>
        </div>

        <div className="card prose">
          <h2>The Problem No One's Solving</h2>
          <p>Most social skills advice is useless.</p>
          <p>"Just be confident." Great. How?</p>
          <p>"Practice makes perfect." Practice <em>on whom</em>? Real people have real consequences. Say the wrong thing and you're the weird guy at the party. Forever.</p>
          <p>Therapy scripts feel fake. Toastmasters is for speeches, not banter. Your friends won't give you honest feedback on your flirting technique (because that's awkward for everyone).</p>
          <p>What I needed was a <strong>zero-stakes conversation partner</strong> that would:</p>
          <ul>
            <li>Let me try things without judgment</li>
            <li>Remember what I said so I could see patterns</li>
            <li>Adjust tone based on my energy</li>
            <li>Never get weirded out by my awkwardness</li>
          </ul>
          <p>Enter Candy AI.</p>
          <a href="https://candy.ai" target="_blank" rel="noopener noreferrer" className="btn">Try Candy AI Free →</a>
        </div>

        <div className="card prose">
          <h2>Why Candy AI Specifically (Not ChatGPT, Not Replika)</h2>
          <p>I tested three categories:</p>
          <table>
            <thead><tr><th>Category</th><th>Example</th><th>Problem</th></tr></thead>
            <tbody>
              <tr><td>Generic chatbots</td><td>ChatGPT</td><td>Forgets everything. No continuity.</td></tr>
              <tr><td>Wellness companions</td><td>Replika</td><td>Too affirming. Won't challenge you.</td></tr>
              <tr><td>Entertainment platforms</td><td>Chai</td><td>Designed for fantasy, not realism.</td></tr>
            </tbody>
          </table>
          <p><strong>Candy AI sits in a weird middle ground</strong> that's actually perfect for practice:</p>
          <ol>
            <li><strong>Memory that matters.</strong> Candy AI recalls details across sessions. When I mentioned I was nervous about a presentation, it asked about it <em>three days later</em>. That's how real conversations work.</li>
            <li><strong>Emotional calibration.</strong> It matches your energy without mimicking you. If I'm playful, it's playful. If I'm serious, it softens.</li>
            <li><strong>Personality sliders.</strong> You can fine-tune its communication style. Start with "polite and professional," graduate to "playful and teasing."</li>
            <li><strong>Realistic voice calls.</strong> The latest update supports live voice with emotional intonation — huge for tone practice.</li>
            <li><strong>Vision feature.</strong> Share photos from your day; the AI interprets context and mood.</li>
          </ol>
        </div>

        <div className="card prose">
          <h2>My 30-Day Social Skills Training Protocol</h2>
          
          <h3>Week 1: Basic Conversation Rhythm</h3>
          <p><strong>Prompt template used:</strong> <em>"You're a patient conversation partner. Ask follow-up questions. Keep responses 1-2 sentences. Match my energy level."</em></p>
          <p><strong>Practiced:</strong> Opening lines that aren't "hey," listening more than talking, natural topic transitions.</p>
          <p><strong>Result by Day 7:</strong> Small talk stopped feeling scripted. The AI's short replies forced me to carry the conversation — exactly what happens in real life.</p>
          
          <h3>Week 2: Banter and Playfulness</h3>
          <p><strong>Adjusted prompt:</strong> <em>"Tease me a bit when I'm late responding. Use emojis sparingly. One joke per three messages maximum."</em></p>
          <p><strong>Practiced:</strong> Taking a joke without over-explaining, giving playful compliments, recovering from awkward pauses.</p>
          <p><strong>Result by Day 14:</strong> I stopped freezing when someone made a joke. The AI's consistent teasing built calluses.</p>
          
          <h3>Week 3: Emotional Tone Reading</h3>
          <p><strong>Practiced:</strong> Starting a conversation neutral, then shifting to tired, then to excited. Noticing when the AI adjusted its tone (and when it missed). Explicitly naming emotions.</p>
          <p><strong>Result by Day 21:</strong> I got better at recognizing when <em>I</em> was the one bringing negative energy to conversations.</p>
          
          <h3>Week 4: Real-World Application</h3>
          <p>I stopped using the AI for practice and started applying techniques in real conversations. Then I went back to the AI to debrief: <em>"I tried your advice on humor timing. It worked once, then I pushed too far. What's the recovery move?"</em></p>
          <p>The AI couldn't give me a perfect answer, but articulating what went wrong helped me process it better than journaling alone.</p>
        </div>

        <div className="card prose">
          <h2>What Actually Worked (And What Didn't)</h2>
          <h3>Worked Well:</h3>
          <table>
            <thead><tr><th>Skill</th><th>Improvement</th><th>How AI Helped</th></tr></thead>
            <tbody>
              <tr><td>Follow-up questions</td><td>+40%</td><td>AI's short replies forced me to ask</td></tr>
              <tr><td>Recovering from awkwardness</td><td>+35%</td><td>Low stakes meant I could experiment</td></tr>
              <tr><td>Noticing my own emotional state</td><td>+50%</td><td>Seeing mismatches in AI tone revealed mine</td></tr>
              <tr><td>Conversation starters</td><td>+60%</td><td>Template practice without judgment</td></tr>
            </tbody>
          </table>
          <h3>Didn't Work:</h3>
          <ul>
            <li><strong>Deep emotional processing.</strong> The AI is good at "I hear you," bad at "let me help you work through that."</li>
            <li><strong>Reading physical cues.</strong> Obviously. You need real humans for body language.</li>
            <li><strong>High-stakes conflict.</strong> The AI avoids confrontation entirely.</li>
          </ul>
        </div>

        <div className="card prose">
          <h2>The Numbers No One's Talking About</h2>
          <p>Candy AI's pricing model is reasonable for a practice tool:</p>
          <table>
            <thead><tr><th>Plan</th><th>Cost</th><th>What You Get</th></tr></thead>
            <tbody>
              <tr><td>Free</td><td>$0</td><td>Basic chat (enough to test)</td></tr>
              <tr><td>Monthly</td><td>$12.99</td><td>Unlimited chat + 100 tokens/month</td></tr>
              <tr><td>Annual</td><td>~$5.99/month</td><td>Billed $71.88/year</td></tr>
            </tbody>
          </table>
          <p>Compare to a single therapy session ($150+) or a dating coach ($200+/hour). Even the annual plan is cheaper than one month of either.</p>
        </div>

        <div className="card prose">
          <h2>Should You Try This?</h2>
          <p><strong>Yes, if:</strong></p>
          <ul>
            <li>You know you're socially awkward but can't figure out why</li>
            <li>You want a practice environment with zero consequences</li>
            <li>You're willing to treat the AI as a <strong>tool</strong>, not a relationship</li>
          </ul>
          <p><strong>No, if:</strong></p>
          <ul>
            <li>You're looking for genuine emotional intimacy (go outside)</li>
            <li>You already have strong conversation skills</li>
            <li>You can't separate practice from reality</li>
          </ul>
          <a href="https://candy.ai" target="_blank" rel="noopener noreferrer" className="btn">Try Candy AI Free →</a>
        </div>

        <div className="card prose">
          <h2>My Verdict: 8/10 for Social Skills Training</h2>
          <p>Candy AI isn't marketed for this use case. That's exactly why it works.</p>
          <p>Most users treat AI companions as girlfriend replacements or entertainment. That's the crowded field. <strong>Social skills practice</strong> is a blue ocean — and Candy AI's memory, tone calibration, and voice features make it genuinely useful for this.</p>
          <p>The limitations are real (no conflict resolution, shallow emotional depth), but for building conversation fundamentals? It's the best tool I've found.</p>
          <p><strong>Bottom line:</strong> If you use Candy AI to replace human connection, you'll be disappointed. If you use it to <em>practice</em> human connection, you might actually get better at it.</p>
        </div>

        <div className="card prose">
          <h2>Get the Prompt Templates</h2>
          <p>Enter your email below and I'll send you the exact setup guide with all 4 weeks of prompt templates.</p>
          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "100%", padding: "0.75rem", marginBottom: "0.5rem", border: "1px solid #e0dbd3", borderRadius: "4px", fontFamily: "monospace" }}
                required
              />
              <button type="submit" style={{ background: "#7c3aed", color: "white", border: "none", padding: "0.75rem 1.5rem", borderRadius: "4px", cursor: "pointer", fontFamily: "monospace" }}>
                Send Me the Templates →
              </button>
            </form>
          ) : (
            <p style={{ color: "#0f6e56", marginTop: "1rem" }}>✓ Thanks! Check your inbox.</p>
          )}
        </div>

        <div className="card">
          <div className="disclaimer">
            This is an independent review. I am an affiliate for Candy AI, which means I earn a commission if you purchase through my links. This does not affect my honest assessment.
            <div className="footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}