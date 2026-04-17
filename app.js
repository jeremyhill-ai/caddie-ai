// ─────────────────────────────────────────────────────────────────────────────
// PRODUCT DATABASE
// Products sourced from independent 2025–2026 test data:
// MyGolfSpy, Today's Golfer, Golf Monthly, Golf Digest Hot List, GolfWRX
// Prices are MSRP — check retailer for current pricing.
// ─────────────────────────────────────────────────────────────────────────────

const DB = {

  // ── DRIVERS ─────────────────────────────────────────────────────────────────
  driver: {
    questions: [
      {
        id: 'swingSpeed',
        type: 'options',
        question: 'What\'s your driver swing speed?',
        sub: 'A rough estimate is fine. Slower = harder to get airborne. Faster = harder to keep in the fairway.',
        options: [
          { icon: '🐢', label: 'Under 85 mph', desc: 'Senior or slower swing' },
          { icon: '⛳', label: '85–95 mph', desc: 'Average amateur' },
          { icon: '💪', label: '95–105 mph', desc: 'Strong player' },
          { icon: '🔥', label: '105+ mph', desc: 'Tour-level speed' }
        ]
      },
      {
        id: 'missPriority',
        type: 'options',
        question: 'What\'s your biggest miss off the tee?',
        options: [
          { icon: '➡️', label: 'Slice (curves away from target)', desc: 'Ball fades hard right for right-handers' },
          { icon: '⬅️', label: 'Hook (dives toward body)', desc: 'Ball goes hard left for right-handers' },
          { icon: '📉', label: 'Low trajectory', desc: 'Ball comes out too flat, loses carry' },
          { icon: '🎯', label: 'General inconsistency', desc: 'Sprays shots in multiple directions' }
        ]
      },
      {
        id: 'priority',
        type: 'options',
        question: 'What matters most in a driver?',
        options: [
          { icon: '💨', label: 'Maximum distance', desc: 'Yards above all else' },
          { icon: '🎯', label: 'Accuracy and control', desc: 'Hitting fairways consistently' },
          { icon: '⚖️', label: 'Balanced distance and forgiveness', desc: 'Good across the board' },
          { icon: '🛡️', label: 'Maximum forgiveness', desc: 'Big sweet spot, punishes misses less' }
        ]
      },
      {
        id: 'look',
        type: 'options',
        question: 'Head shape preference at address?',
        options: [
          { icon: '🔵', label: 'Large/round — inspires confidence', desc: 'Bigger profile, easy to set up' },
          { icon: '🔷', label: 'Compact and pear-shaped', desc: 'Tour-style, smaller footprint' },
          { icon: '🤷', label: 'No preference', desc: 'Performance over aesthetics' }
        ]
      }
    ],
    products: [
      { name: 'TaylorMade Qi4D', price: '$649', url: 'https://www.taylormadegolf.com', tags: ['Best Overall 2026', 'All Swing Speeds', 'Adjustable'],
        desc: 'MyGolfSpy\'s #1 overall driver across 42 models and 20,580 shots. Exceptional simultaneously in distance, accuracy, and forgiveness — no other 2026 driver matched that combination. 26g of movable weight, fifth-gen carbon face. Used by Scottie Scheffler and Rory McIlroy.',
        swingSpeed: [1,2,3], missPriority: [1,2,3], priority: [2,3], look: [0,2], budget: ['mid','premium'] },

      { name: 'Callaway Quantum Triple Diamond Max', price: '$699', url: 'https://www.callawaygolf.com', tags: ['Today\'s Golfer #1', 'Low Spin', 'Tour-Versatile'],
        desc: 'Today\'s Golfer\'s Best Driver 2026 overall. 161.1 mph ball speed, 282.9 yards carry, 2,065 rpm spin — with forgiveness closer to a game-improvement head than a tour driver. The best single mix of elite distance and genuine playability in the 2026 field.',
        swingSpeed: [2,3], missPriority: [1,2,3], priority: [0,2], look: [0,2], budget: ['premium'] },

      { name: 'Callaway Quantum Max', price: '$649', url: 'https://www.callawaygolf.com', tags: ['Longest 2026', 'Tri-Force Face', 'High MOI'],
        desc: 'MyGolfSpy\'s highest distance score (9.5/10) of all 42 drivers tested. 163.7 mph ball speed, 286.2 yards carry — the fastest and longest 2026 driver. Tri-Force face uses titanium, polymer mesh, and carbon fiber. Built for players who want to bomb it.',
        swingSpeed: [2,3], missPriority: [3], priority: [0], look: [0,2], budget: ['mid','premium'] },

      { name: 'PING G440 K', price: '$649', url: 'https://www.ping.com', tags: ['Max Forgiveness', '10,300 MOI', 'Adjustable Weight'],
        desc: 'PING\'s most forgiving driver ever at 10,300+ g·cm² MOI. Dual Carbonfly Wrap crown and sole with 32g adjustable rear weight. Golf Monthly five-star, "Best Wide Appeal." Rick Shiels: "potentially the longest forgiving driver EVER." Best-in-class for off-center stability.',
        swingSpeed: [0,1,2,3], missPriority: [0,3], priority: [3], look: [0,2], budget: ['mid','premium'] },

      { name: 'PING G440 Max', price: '$619', url: 'https://www.ping.com', tags: ['Tightest Dispersion', 'Forgiving', 'High MOI'],
        desc: 'Today\'s Golfer\'s Best Forgiving Driver. 8.7 yards of left-right dispersion — tightest grouping in their entire 46-configuration test — while carrying 281.4 yards. The accuracy-forgiveness combination is nearly unmatched in 2026.',
        swingSpeed: [1,2,3], missPriority: [0,3], priority: [1,3], look: [0,2], budget: ['mid','premium'] },

      { name: 'Callaway Quantum Triple Diamond', price: '$699', url: 'https://www.callawaygolf.com', tags: ['Low Spin', 'Tour Player', 'Carbon Face'],
        desc: 'Best low-spin tour driver of 2026. 1,996 rpm spin with 286.3 yards carry and 162.8 mph ball speed. Highest ball speed of any Callaway driver in MyGolfSpy testing. For skilled players chasing pure distance with a flat, penetrating trajectory.',
        swingSpeed: [3], missPriority: [1,2], priority: [0], look: [1,2], budget: ['premium'] },

      { name: 'COBRA OPTM Max-K', price: '$599', url: 'https://www.cobragolf.com', tags: ['10K+ MOI', 'Best Accuracy', 'Value vs PING'],
        desc: 'Best accuracy driver in MyGolfSpy\'s 2026 high-swing-speed test. Lost just 1.94 yards carry on toe strikes — smallest delta of any 2026 driver. 10K+ MOI competes directly with the PING G440 K at $50 less.',
        swingSpeed: [2,3], missPriority: [0,3], priority: [1,3], look: [0,2], budget: ['mid'] },

      { name: 'COBRA OPTM Max-D', price: '$599', url: 'https://www.cobragolf.com', tags: ['Draw-Bias', 'Slice Fixer', '10K MOI'],
        desc: 'Best for slice correction in 2026. Fixed 11g heel weight and 2-degree upright lie bias help severe slicers get the ball back on track. Lost just 3.77 yards on heel mishits vs. 12–15 for most competitors.',
        swingSpeed: [1,2,3], missPriority: [0], priority: [3], look: [0,2], budget: ['mid'] },

      { name: 'Wilson DYNAPWR Max+', price: '$499', url: 'https://www.wilson.com', tags: ['Best Value High MOI', '10K MOI', 'High Launch'],
        desc: '10,000+ MOI at $150 less than any comparable competitor. Golfalot tested it head-to-head vs. PING G440 K and COBRA OPTM Max-K — it was the longest of all three, measuring 2 mph faster. Best-in-class value for max forgiveness.',
        swingSpeed: [0,1,2], missPriority: [0,3], priority: [0,3], look: [0,2], budget: ['entry','mid'] },

      { name: 'Titleist GT3', price: '$449', url: 'https://www.titleist.com', tags: ['Elite Distance Value', '2025 Flagship', 'Workable'],
        desc: 'Titleist permanently dropped GT to $449 — $200 less than 2026 flagships. GT3 produced 162.4 mph and 283.3 yards carry in Today\'s Golfer\'s 2026 test, finishing 4th overall. 5-position CG Track for tour-caliber adjustability. Best value driver on the market right now.',
        swingSpeed: [2,3], missPriority: [1,2], priority: [0,1,2], look: [1,2], budget: ['entry','mid'] },

      { name: 'Titleist GT2', price: '$449', url: 'https://www.titleist.com', tags: ['Forgiving', 'Value', 'Higher MOI vs GT3'],
        desc: 'GT2 trades the GT3\'s 5-position CG Track for higher MOI — more forgiveness, slightly less workability. Same $449 price. Top-10 overall in MyGolfSpy\'s 2026 test despite being 18 months old. Solid all-around for the mid-handicapper.',
        swingSpeed: [1,2,3], missPriority: [3], priority: [2,3], look: [0,2], budget: ['entry','mid'] },

      { name: 'TaylorMade Qi35', price: '$499', url: 'https://www.taylormadegolf.com', tags: ['Previous Flagship', 'Strong Value', 'Carbon Face'],
        desc: 'Same carbon Twist Face platform as the Qi4D, now $150 less. Solid all-around performer. The Qi4D is measurably better in accuracy and forgiveness — whether that\'s worth $150 is up to you. Good pick for TaylorMade fans on a budget.',
        swingSpeed: [1,2,3], missPriority: [3], priority: [0,2], look: [0,2], budget: ['entry','mid'] },

      { name: 'Callaway Elyte Triple Diamond', price: '$549', url: 'https://www.callawaygolf.com', tags: ['2025 Most Wanted', 'Tour Player', 'Proven'],
        desc: 'MyGolfSpy\'s 2025 Most Wanted winner — still competitive in 2026 testing. The most proven low-spin performer at this price. $100 less than the 2026 Quantum TD with nearly identical performance numbers.',
        swingSpeed: [2,3], missPriority: [1,2], priority: [0,2], look: [1,2], budget: ['mid'] },

      { name: 'Srixon ZXi', price: '$549', url: 'https://www.srixon.com', tags: ['Straightest Ball Flight', 'Accuracy Leader', 'Low Dispersion'],
        desc: '8.1 yards left-right dispersion in Today\'s Golfer\'s 2026 test — the tightest of any driver tested at high swing speeds. Best driver for golfers who prioritize finding fairways above everything else.',
        swingSpeed: [2,3], missPriority: [0,1,2,3], priority: [1], look: [1,2], budget: ['mid'] },

      { name: 'PING G430 Max 10K', price: '$449', url: 'https://www.ping.com', tags: ['10,100 MOI', '2024 Winner', 'Budget Forgiving'],
        desc: 'MyGolfSpy\'s 2024 Most Wanted winner. 10,100 g·cm² MOI delivers elite stability at $200 less than the 2026 G440 K. Performance still holds up in 2026 comparisons. Best forgiveness pick if the latest model isn\'t required.',
        swingSpeed: [0,1,2], missPriority: [0,3], priority: [3], look: [0,2], budget: ['entry'] },

      { name: 'Wilson DYNAPWR Carbon', price: '$549', url: 'https://www.wilson.com', tags: ['Accuracy', 'Weight-Forward', 'Low Dispersion'],
        desc: '9.0 yards dispersion — third tightest in Today\'s Golfer\'s accuracy table behind Srixon ZXi and PING G440 Max. Weight-forward configuration rewards players who want a tighter ball flight. Underrated at this price.',
        swingSpeed: [2,3], missPriority: [0,1], priority: [1], look: [0,2], budget: ['mid'] },

      { name: 'COBRA DS-Adapt', price: '$349', url: 'https://www.cobragolf.com', tags: ['Best Budget', '33-Setting Adjustability', 'Mid Swing Speeds'],
        desc: 'The DS-Adapt LS finished top-3 in distance, accuracy, AND forgiveness at mid swing speeds in MyGolfSpy\'s 2025 test. 33 adjustment settings. Best-performing driver under $400 — a genuine value pick for the 85–100 mph player.',
        swingSpeed: [1,2], missPriority: [3], priority: [0,2,3], look: [0,2], budget: ['entry'] },

      { name: 'Takomo Ignis D1', price: '$319', url: 'https://www.takomogolf.com', tags: ['DTC Value', 'Direct-to-Consumer', '10K MOI'],
        desc: 'Best value under $320 in MyGolfSpy\'s 2026 high-swing-speed review. 10K MOI holds its own against much more expensive options. Not the best at anything but not the worst at anything either.',
        swingSpeed: [1,2,3], missPriority: [3], priority: [2], look: [0,2], budget: ['entry'] },

      { name: 'LA Golf Driver', price: '$649', url: 'https://lagolf.com', tags: ['Best Accuracy 2026', 'Straight Shot %', 'Precision'],
        desc: 'Led MyGolfSpy\'s entire 42-driver field in Straight Shot Percentage and Playable Shot Percentage. Built by a premium shaft brand known for precision. Shorter, tighter-flight design that trades some distance for laser accuracy.',
        swingSpeed: [1,2,3], missPriority: [0,1,2,3], priority: [1], look: [1,2], budget: ['premium'] },

      { name: 'Callaway Quantum Max-D', price: '$649', url: 'https://www.callawaygolf.com', tags: ['Draw-Bias', 'Slice Fixer', 'Upright Lie'],
        desc: '2-degree upright lie angle and fixed heel weight for golfers fighting a slice. Highest-spinning Quantum model makes it the most draw-friendly. True Spec testing found this was the highest-spinning across all three swing speeds.',
        swingSpeed: [0,1,2], missPriority: [0], priority: [3], look: [0,2], budget: ['mid','premium'] },

      { name: 'Mizuno JPX One', price: '$599', url: 'https://www.mizunogolf.com', tags: ['Nanoalloy Face', 'New 2026', 'Workable'],
        desc: 'Industry-first Nanoalloy face — a nylon-family material that\'s firm at rest and flexible under tension for more efficient energy transfer. Available in Standard and Select (fade-bias) versions. Mizuno\'s strongest driver launch in recent memory.',
        swingSpeed: [2,3], missPriority: [1,2], priority: [0,2], look: [1,2], budget: ['mid'] },

      { name: 'Callaway Quantum Max+ (Lighter)', price: '$549', url: 'https://www.callawaygolf.com', tags: ['Slower Swingers', 'Lighter Package', 'High Launch'],
        desc: 'Lighter overall build and 6-way adjustable hosel for slower swing speeds. Available 2 degrees more upright than standard Max. Tri-Force face technology in a package designed for sub-85 mph players. Best premium option for slower swingers.',
        swingSpeed: [0,1], missPriority: [0,2,3], priority: [0,2,3], look: [0,2], budget: ['mid'] }
    ]
  },

  // ── IRONS ───────────────────────────────────────────────────────────────────
  irons: {
    questions: [
      {
        id: 'handicap',
        type: 'options',
        question: 'What\'s your handicap range?',
        sub: 'This determines which iron category will actually help your game.',
        options: [
          { icon: '🔰', label: '25+ (Beginner/High)', desc: 'Prioritize forgiveness and getting the ball airborne' },
          { icon: '⛳', label: '15–25 (Mid-High)', desc: 'Need forgiveness but want to improve consistency' },
          { icon: '🎯', label: '8–15 (Mid)', desc: 'Improving player who can work the ball sometimes' },
          { icon: '⭐', label: 'Under 8 (Low)', desc: 'Ball-striker who wants feel and control' }
        ]
      },
      {
        id: 'strikePattern',
        type: 'options',
        question: 'Be honest — how consistent is your strike?',
        sub: 'Tip: Put foot spray on your 6-iron and hit 10 shots. Are marks clustered or spread out?',
        options: [
          { icon: '🌊', label: 'All over the face', desc: 'Toe, heel, thin, fat — unpredictable' },
          { icon: '📍', label: 'Low on the face', desc: 'Often catching it thin or off the bottom' },
          { icon: '↔️', label: 'Heel/toe bias', desc: 'Consistent strike but away from center' },
          { icon: '🎯', label: 'Mostly centered', desc: 'Occasionally off-center but generally reliable' }
        ]
      },
      {
        id: 'ballFlight',
        type: 'options',
        question: 'What\'s your iron ball flight issue?',
        options: [
          { icon: '📉', label: 'Too low — can\'t hold greens', desc: 'Need more launch and carry' },
          { icon: '📈', label: 'Too high — loses distance in wind', desc: 'Need a more penetrating flight' },
          { icon: '↗️', label: 'Decent height, but inconsistent', desc: 'Need more consistency' },
          { icon: '✅', label: 'Ball flight is fine', desc: 'Looking for improved feel or distance' }
        ]
      },
      {
        id: 'ironLook',
        type: 'options',
        question: 'What does your ideal iron look like at address?',
        options: [
          { icon: '💪', label: 'Thick sole, wide body — maximum confidence', desc: 'Chunk-proof, easy to set up' },
          { icon: '📐', label: 'Mid-size cavity back — clean but forgiving', desc: 'Looks like a real iron, still has help' },
          { icon: '🔪', label: 'Compact, thin topline — player\'s look', desc: 'Minimal offset, sleek profile' },
          { icon: '⚡', label: 'Blade or near-blade', desc: 'Pure muscle back, maximum feedback' }
        ]
      }
    ],
    products: [
      { name: 'TaylorMade Qi Max HL', price: '$999 (7-piece)', url: 'https://www.taylormadegolf.com', tags: ['SGI', 'Back-to-Back Winner', 'Max Launch'],
        desc: 'Today\'s Golfer\'s back-to-back Game Improvement winner. Maintains ball speed at 85–90% of a pure strike on mishits. Hollow-body construction with tungsten weighting for maximum launch. Best iron for high-handicappers who struggle to get the ball airborne.',
        handicap: [0,1], strikePattern: [0,1,2,3], ballFlight: [0,2], ironLook: [0,1], budget: ['mid','premium'] },

      { name: 'Callaway Quantum Max Irons', price: '$999 (7-piece)', url: 'https://www.callawaygolf.com', tags: ['AI Smart Face', 'SGI', 'Forgiving'],
        desc: 'AI-optimized face built from real high-handicapper impact patterns — engineered where average golfers actually make contact. Progressive Tri-Sole geometry from 4-iron through wedges. Best for golfers shooting in the 90s whose biggest problem is inconsistency.',
        handicap: [0,1], strikePattern: [0,1,2], ballFlight: [0,2], ironLook: [0,1], budget: ['mid','premium'] },

      { name: 'Callaway Elyte X', price: '$849 (7-piece)', url: 'https://www.callawaygolf.com', tags: ['SGI', 'Forgiving', 'High Launch'],
        desc: 'Superior forgiveness, high ball speeds, confidence-inspiring profile. Multiple testers\' top pick for typical high-handicappers. May not be the best for control or precision, but can be a game-changer for golfers struggling to hit greens.',
        handicap: [0,1], strikePattern: [0,1,2], ballFlight: [0,2], ironLook: [0,1], budget: ['entry','mid'] },

      { name: 'PING G740 Irons', price: '$999 (7-piece)', url: 'https://www.ping.com', tags: ['SGI', 'Forgiving', 'Improved Feel'],
        desc: 'Improved feel over the G730 generation with exceptional forgiveness. Good looks at address and in the bag. Consistently recommended for high-handicappers who want PING reliability and a proven forgiveness platform.',
        handicap: [0,1], strikePattern: [0,1,2], ballFlight: [0,2], ironLook: [0,1], budget: ['mid','premium'] },

      { name: 'PXG Gen8 0311XP', price: '$1,299 (7-piece)', url: 'https://www.pxg.com', tags: ['SGI/GI', 'Max Launch', 'QuantumCOR'],
        desc: 'Built for 10–22 handicappers who need maximum launch and carry to attack greens. QuantumCOR and Deep Core Recoil technology for consistently higher, longer iron shots. Best if you\'ve been told for years that you need more height.',
        handicap: [0,1,2], strikePattern: [0,1,2], ballFlight: [0,2], ironLook: [0,1], budget: ['premium'] },

      { name: 'Callaway Apex Ai200', price: '$1,099 (7-piece)', url: 'https://www.callawaygolf.com', tags: ['GI', 'AI Face', 'Feel + Forgiveness'],
        desc: 'Golf Digest Hot List top performer. Tester: "Surgically accurate with explosive distance — even off-center, it\'s an absolute dream." Forged hollow-body with AI Smart Face and tungsten weighting. Smaller profile than SGI but still very forgiving.',
        handicap: [1,2], strikePattern: [2,3], ballFlight: [2,3], ironLook: [1,2], budget: ['mid','premium'] },

      { name: 'Titleist T300', price: '$1,099 (7-piece)', url: 'https://www.titleist.com', tags: ['GI', 'Tour Look', 'Tungsten Weighted'],
        desc: 'The sweet spot: clean look at address, tungsten weighting for forgiveness, compact cavity back for improving players. Consistent pick across multiple 2026 review sources for 10–20 handicappers who want a legitimate-looking iron that still helps.',
        handicap: [1,2], strikePattern: [2,3], ballFlight: [2,3], ironLook: [1,2], budget: ['mid','premium'] },

      { name: 'Wilson Staff Model XB', price: '$899 (7-piece)', url: 'https://www.wilson.com', tags: ['GI', 'Best for Most Golfers', 'Hollow Body'],
        desc: 'Independent Golf Reviews\' "Best Irons for Most Golfers 2026." Wilson\'s first hollow-body players iron — rare ball speed in a clean address profile. Best for 8–18 handicappers who feel caught between GI and players distance irons.',
        handicap: [1,2], strikePattern: [2,3], ballFlight: [2,3], ironLook: [1,2], budget: ['mid'] },

      { name: 'TaylorMade P790', price: '$1,249 (7-piece)', url: 'https://www.taylormadegolf.com', tags: ['Players Distance', 'Best Overall 2026', 'Hollow SpeedFoam'],
        desc: 'Today\'s Golfer\'s back-to-back Players Distance winner. Would rank 2nd in Game Improvement if placed there. If you need one iron for any golfer without knowing their game, this is it. SpeedFoam construction delivers 2–3 mph faster ball speeds than competitors.',
        handicap: [1,2,3], strikePattern: [2,3], ballFlight: [2,3], ironLook: [1,2], budget: ['mid','premium'] },

      { name: 'Titleist T200', price: '$1,099 (7-piece)', url: 'https://www.titleist.com', tags: ['Players Distance', 'Tour Inspired', 'Consistent Gapping'],
        desc: 'Standout players\' distance iron — explosive but forgiving in an incredibly sleek tour design. Exceptional ball speeds, consistent gapping, refined wedge shape. For better players who want distance without losing the compact look.',
        handicap: [2,3], strikePattern: [2,3], ballFlight: [3], ironLook: [2,3], budget: ['mid','premium'] },

      { name: 'Mizuno JPX925 Forged', price: '$1,099 (7-piece)', url: 'https://www.mizunogolf.com', tags: ['Players Distance', 'Forged', 'Premium Feel'],
        desc: 'Top pick for mid-handicap players. Hollow-body players distance iron with exceptional forged feel — beautiful, surprisingly forgiving. Contour Eclipse multi-thickness face for impressive distance. Best Mizuno for the 6–15 handicap range.',
        handicap: [2,3], strikePattern: [2,3], ballFlight: [2,3], ironLook: [1,2], budget: ['mid','premium'] },

      { name: 'Srixon ZXi5', price: '$1,099 (7-piece)', url: 'https://www.srixon.com', tags: ['Players Distance', 'Workable', 'Forgiving'],
        desc: 'Golf Digest Hot List top-5. Tester (7-handicap): "I could hit any type of shot — draw, fade, high, low." Sets up identically to the ZXi7 players irons but is noticeably more forgiving. Variable-thickness face for consistent ball speed.',
        handicap: [2,3], strikePattern: [2,3], ballFlight: [2,3], ironLook: [1,2], budget: ['mid','premium'] },

      { name: 'PING i540 Irons', price: '$1,099 (7-piece)', url: 'https://www.ping.com', tags: ['Players Distance', 'Forged Feel', 'Distance Control'],
        desc: 'Exceptional ball speeds, consistent gapping, refined wedge shape. PING\'s strongest players-distance option. Best for golfers who want PING precision in a compact, workable package with reliable distance control.',
        handicap: [2,3], strikePattern: [2,3], ballFlight: [3], ironLook: [2], budget: ['mid','premium'] },

      { name: 'PING i240 Irons', price: '$1,099 (7-piece)', url: 'https://www.ping.com', tags: ['Players Distance', 'High Launch', 'Control'],
        desc: 'PING\'s highest-launching players model. New ABS badge 8.5g lighter for more perimeter weighting — 11% reduction in dispersion. Ideal for single-digit handicappers wanting a compact look with consistency improvements.',
        handicap: [2,3], strikePattern: [3], ballFlight: [0,2], ironLook: [2], budget: ['mid','premium'] },

      { name: 'Callaway X Forged Max', price: '$1,249 (7-piece)', url: 'https://www.callawaygolf.com', tags: ['Players Distance', 'Single-Piece Forged', 'Mid Single Digit'],
        desc: 'Built for mid single-digit handicappers who want pure forged feel with more help than a traditional blade. Single-piece construction, wider sole, improved perimeter weighting. Targets the player between pure players irons and compact GI.',
        handicap: [2,3], strikePattern: [2,3], ballFlight: [3], ironLook: [2,3], budget: ['premium'] },

      { name: 'Titleist T150', price: '$1,249 (7-piece)', url: 'https://www.titleist.com', tags: ['Players', 'Blade Look + Forgiveness', 'Tour Inspired'],
        desc: 'Tour-inspired compact head with genuine forgiveness — best players iron for golfers who want precision without full punishment. Blends blade aesthetics with enough modern engineering to be playable for mid-single-digit handicappers.',
        handicap: [3], strikePattern: [3], ballFlight: [2,3], ironLook: [2,3], budget: ['premium'] },

      { name: 'Titleist T100', price: '$1,249 (7-piece)', url: 'https://www.titleist.com', tags: ['Players Blade', 'Tour Control', 'Single Digit Only'],
        desc: 'Tour-level control for single-digit handicappers who demand precision. Compact head, minimal offset, pure feel. Not for high-handicappers — this will expose weaknesses, not hide them. The iron you work toward, not the one you start with.',
        handicap: [3], strikePattern: [3], ballFlight: [3], ironLook: [3], budget: ['premium'] },

      { name: 'Mizuno Pro S-1', price: '$1,499 (7-piece)', url: 'https://www.mizunogolf.com', tags: ['Blade', 'Scratch–5 HCP', 'Max Workability'],
        desc: 'Built for scratch to 5-handicap golfers who prioritize workability, precision, and unfiltered feedback. This iron tells you exactly what went wrong when you miss. If you hit greens consistently and want a set that improves shot-making for years, this is it.',
        handicap: [3], strikePattern: [3], ballFlight: [3], ironLook: [3], budget: ['premium'] },

      { name: 'Srixon ZXi7', price: '$1,099 (7-piece)', url: 'https://www.srixon.com', tags: ['Players Blade', 'VT Sole', 'Tour Feel'],
        desc: 'VT Sole technology delivers exquisite turf interaction — glides through grass with a crispness that better players notice immediately. Variable-thickness face for optimized ball speed. Best for low handicappers who want feel without paying Titleist prices.',
        handicap: [3], strikePattern: [3], ballFlight: [2,3], ironLook: [2,3], budget: ['mid','premium'] },

      { name: 'COBRA KING 3DP Tour', price: '$1,999 (7-piece)', url: 'https://www.cobragolf.com', tags: ['3D Printed', 'Most Forgiving Blade', 'Tour + Aspirational'],
        desc: '3D-printed internal lattice creates the most forgiving blade shape on the market. Seen on PGA Tour and in 10-handicap bags. Combines sleek tour looks with modern forgiveness tech. CNC-milled grooves for maximum spin.',
        handicap: [2,3], strikePattern: [2,3], ballFlight: [2,3], ironLook: [2,3], budget: ['premium'] },

      { name: 'Takomo 101 MKII', price: '$499 (7-piece)', url: 'https://www.takomogolf.com', tags: ['Best Value', 'Direct-to-Consumer', 'Know Your Specs'],
        desc: 'Golf Monthly: "An unbeatable proposition in terms of value for the golfer who knows their specs." Direct-to-consumer pricing. Quality and performance above what the price suggests. Buy if you know your shaft flex and lie angle and don\'t need to pay for a brand name.',
        handicap: [1,2,3], strikePattern: [2,3], ballFlight: [2,3], ironLook: [1,2,3], budget: ['entry'] },

      { name: 'Tour Edge Exotics CB Irons', price: '$799 (7-piece)', url: 'https://www.touredge.com', tags: ['Players CB', 'Forged', 'Value Premium'],
        desc: 'Forged from 1025 carbon steel and milled for feel and precision. CB topline is just 1mm thicker than the MB while sharing the same loft specs — easy to blend. Precision and feel for better players at a significantly lower price than comparable irons.',
        handicap: [2,3], strikePattern: [3], ballFlight: [2,3], ironLook: [2,3], budget: ['entry','mid'] }
    ]
  },

  // ── WEDGES ───────────────────────────────────────────────────────────────────
  wedges: {
    questions: [
      {
        id: 'skill',
        type: 'options',
        question: 'How would you describe your short game?',
        options: [
          { icon: '🔰', label: 'Developing — short game is a weak spot', desc: 'Need forgiveness on mis-hits around the greens' },
          { icon: '⛳', label: 'Average — decent from 60 yards in', desc: 'Consistent but not scoring wedges yet' },
          { icon: '🎯', label: 'Strong — I attack pins inside 100 yards', desc: 'Need spin control and distance consistency' },
          { icon: '⭐', label: 'Tour-level feel required', desc: 'Want maximum workability and feedback' }
        ]
      },
      {
        id: 'conditions',
        type: 'options',
        question: 'What conditions do you play in most?',
        options: [
          { icon: '☀️', label: 'Firm and dry', desc: 'Hard ground, fast greens — need high spin to stop the ball' },
          { icon: '🌧️', label: 'Wet and soft', desc: 'Lush rough, slower greens — spin in moisture matters' },
          { icon: '🌤️', label: 'Mixed conditions', desc: 'Play year-round in variable weather' },
          { icon: '⛱️', label: 'Lots of bunker play', desc: 'Courses with heavy sand' }
        ]
      },
      {
        id: 'shotTypes',
        type: 'options',
        question: 'What shots do you hit most around the greens?',
        options: [
          { icon: '🎯', label: 'Standard pitch and chip', desc: 'Mostly straightforward shots' },
          { icon: '🔄', label: 'Creative — open face, flop shots, bump and runs', desc: 'Like to work the face and hit multiple shot types' },
          { icon: '📏', label: 'Full wedge shots from 80–120 yards', desc: 'Distance gapping matters most' },
          { icon: '⛱️', label: 'Lots of bunker shots', desc: 'Need reliable sand wedge performance' }
        ]
      },
      {
        id: 'grind',
        type: 'options',
        question: 'Wedge finish preference?',
        options: [
          { icon: '✨', label: 'Chrome / polished', desc: 'Classic look, durable finish' },
          { icon: '⬛', label: 'Black or dark finish', desc: 'Anti-glare, modern look' },
          { icon: '🦾', label: 'Raw finish', desc: 'Unplated steel — more spin as it ages' },
          { icon: '🤷', label: 'No preference', desc: 'Performance over aesthetics' }
        ]
      }
    ],
    products: [
      { name: 'Titleist Vokey SM11', price: '$179/wedge', url: 'https://www.titleist.com', tags: ['Best Overall 2026', 'Most Grind Options', 'Tour Standard'],
        desc: 'Golf Monthly\'s best wedge 2026. New directional face texture for more friction, centralized CG across all grinds, heat treatment doubling groove durability. 25 loft/bounce/grind combinations. The most complete wedge in 2026.',
        skill: [1,2,3], conditions: [0,1,2,3], shotTypes: [0,1,2,3], grind: [0,3], budget: ['mid','premium'] },

      { name: 'Titleist Vokey SM10', price: '$159/wedge', url: 'https://www.titleist.com', tags: ['Gold Standard', 'Tour Proven', 'Multiple Grinds'],
        desc: 'Still the most-played wedge on PGA Tour. Progressive CG placement, individually cut TX9 grooves that vary by loft, 6 grinds for every swing style. If your SM10 has less than 50 rounds on it, don\'t upgrade — the performance gap is minimal.',
        skill: [1,2,3], conditions: [0,1,2,3], shotTypes: [0,1,2,3], grind: [0,3], budget: ['mid','premium'] },

      { name: 'TaylorMade MG5', price: '$179/wedge', url: 'https://www.taylormadegolf.com', tags: ['Forged Carbon Steel', 'Best Feel', 'Saw-Milled Grooves'],
        desc: 'First MG wedge fully forged from soft carbon steel — a step-change in feel for TaylorMade\'s wedge line. Saw-milled grooves for maximum spin on full and partial shots. Golf Monthly: "will compete with anything Vokey puts out."',
        skill: [2,3], conditions: [0,1,2,3], shotTypes: [0,1,2], grind: [0,3], budget: ['premium'] },

      { name: 'TaylorMade MG4', price: '$159/wedge', url: 'https://www.taylormadegolf.com', tags: ['Players Wedge', 'Versatile', 'Tour Shape'],
        desc: 'Golf Monthly: "A brilliant traditionally-shaped wedge that competes directly with the Vokey SM10." Strong spin control, clean traditional shape. Best complete package for mid-to-low handicappers who want tour performance without the top-tier price.',
        skill: [1,2,3], conditions: [0,2,3], shotTypes: [0,1,2], grind: [0,3], budget: ['mid','premium'] },

      { name: 'TaylorMade Hi-Toe 4', price: '$169/wedge', url: 'https://www.taylormadegolf.com', tags: ['Flop Shots', 'Open Face Specialist', 'Full-Face Grooves'],
        desc: 'For creative short game players who frequently open the face for specialty shots. Full-face grooves maintain spin even when the face is fully open. Best for better players who hit lots of flop shots and play imaginatively around the greens.',
        skill: [2,3], conditions: [0,2], shotTypes: [1], grind: [0,3], budget: ['mid','premium'] },

      { name: 'Callaway Jaws Raw Chrome', price: '$169/wedge', url: 'https://www.callawaygolf.com', tags: ['Raw Finish', 'Max Spin', 'Improves with Age'],
        desc: 'Raw, unplated face develops micro-texture over time — spin actually increases as you play it. Full-face JAWS grooves across the entire hitting area for spin consistency on off-center strikes. For feel-first players who manipulate the clubface.',
        skill: [2,3], conditions: [0,2,3], shotTypes: [1,2], grind: [2,3], budget: ['mid','premium'] },

      { name: 'Callaway Jaws Raw Black Plasma', price: '$169/wedge', url: 'https://www.callawaygolf.com', tags: ['Anti-Glare', 'Raw Finish', 'Full-Face Grooves'],
        desc: 'Black plasma finish for anti-glare, raw steel underneath for spin that builds over time. Exceptional performance from all lies and distances. Serious hop-and-stop ability around the greens.',
        skill: [2,3], conditions: [0,2], shotTypes: [1,2], grind: [1,2,3], budget: ['mid','premium'] },

      { name: 'Callaway Opus SP+', price: '$169/wedge', url: 'https://www.callawaygolf.com', tags: ['New 2026', 'Premium Feel', 'Tour Shape'],
        desc: 'Callaway\'s updated Opus line for 2026. Refined tour-inspired shaping, intricate face etching between grooves for improved spin and consistency. National Club Golfer: "hard to fault — great in sand and off the turf."',
        skill: [1,2,3], conditions: [0,1,2,3], shotTypes: [0,1,2,3], grind: [0,3], budget: ['mid','premium'] },

      { name: 'Callaway Opus Platinum', price: '$199/wedge', url: 'https://www.callawaygolf.com', tags: ['Premium Material', 'Tungsten Weighted', 'Clean Turf Interaction'],
        desc: 'Advanced materials and tungsten weighting for solid, consistent feel through impact. National Club Golfer: "sets a new standard for performance." Excelled in every shot-making scenario — chips, pitches, bunker shots. The most serious Callaway alternative to Vokey.',
        skill: [2,3], conditions: [0,1,2,3], shotTypes: [0,1,2,3], grind: [0,3], budget: ['premium'] },

      { name: 'Cleveland RTX Full-Face 2', price: '$159/wedge', url: 'https://www.clevelandgolf.com', tags: ['Full-Face Grooves', 'Versatile', 'Spin Machine'],
        desc: 'National Club Golfer: "confident, versatile, and spin-obsessed." Full-face groove design delivers spin wherever the ball contacts the face. A compelling Vokey alternative for golfers who want to try something different.',
        skill: [1,2,3], conditions: [0,1,2], shotTypes: [0,1,2,3], grind: [0,3], budget: ['mid'] },

      { name: 'Cleveland RTX 6 ZipCore', price: '$159/wedge', url: 'https://www.clevelandgolf.com', tags: ['Wet Conditions', 'Moisture Performance', 'ZipCore Tech'],
        desc: 'Best wedge for wet-climate golfers. Specialized groove and face technology maintains spin in moisture better than most competitors. If your home course is always wet, this outperforms the Vokey in those specific conditions.',
        skill: [1,2,3], conditions: [1,2], shotTypes: [0,1,2,3], grind: [0,3], budget: ['mid'] },

      { name: 'Ping S259', price: '$169/wedge', url: 'https://www.ping.com', tags: ['Compact Tour Shape', 'High Spin', 'Consistent Control'],
        desc: 'Golf Monthly: "compact, tour-preferred shape with serious stopping power." Tighter groove pattern and rounded toe look superb. Hard to fault on control, consistency, and versatility for confident golfers who demand precision.',
        skill: [2,3], conditions: [0,1,2], shotTypes: [0,1,2], grind: [0,3], budget: ['mid','premium'] },

      { name: 'Mizuno Pro T-3', price: '$149/wedge', url: 'https://www.mizunogolf.com', tags: ['High Handicap Wedge', 'Forgiving', 'Wet Conditions Spin'],
        desc: 'Top pick for higher-handicap golfers needing maximum forgiveness without sacrificing performance. Shallow cavity-back for help on full swings. Quad Cut+ grooves eliminate moisture — excellent wet-condition spin. Inspires confidence at address.',
        skill: [0,1], conditions: [1,2,3], shotTypes: [0,2,3], grind: [0,3], budget: ['mid'] },

      { name: 'Cleveland CBX ZipCore', price: '$129/wedge', url: 'https://www.clevelandgolf.com', tags: ['Forgiving', 'Cavity Back', 'Beginner-Mid Friendly'],
        desc: 'Cavity back design gives honest forgiveness for mis-hits while still delivering enough spin for the short game. Strong option for beginners through mid-handicappers who want wedge reliability without tour pricing.',
        skill: [0,1], conditions: [0,1,2,3], shotTypes: [0,2,3], grind: [0,3], budget: ['entry','mid'] },

      { name: 'Callaway Opus Brushed Chrome', price: '$149/wedge', url: 'https://www.callawaygolf.com', tags: ['All-Rounder', 'Mid Handicap', 'Versatile'],
        desc: 'National Club Golfer: "right up there with the best of them." Cutting-edge face technology, tour-tested shaping, strong customization options. A well-rounded mid-handicap wedge that competes at the Vokey\'s price with slightly more forgiveness.',
        skill: [1,2], conditions: [0,1,2,3], shotTypes: [0,1,2,3], grind: [0,3], budget: ['mid'] },

      { name: 'Takomo SF002', price: '$89/wedge', url: 'https://www.takomogolf.com', tags: ['Best Budget', 'Full-Face Grooves', 'Value'],
        desc: 'National Club Golfer: "clean and simple with a modern edge that feels premium despite its low price." Full-face grooves for spin when opened. Best budget wedge available in 2026 for players who know their grind specs.',
        skill: [0,1,2], conditions: [0,1,2,3], shotTypes: [0,1,2], grind: [0,3], budget: ['entry'] },

      { name: 'Cleveland Smart Sole 4', price: '$99/wedge', url: 'https://www.clevelandgolf.com', tags: ['Beginner', 'Easy to Hit', 'Wide Sole'],
        desc: 'Built for beginners and high-handicappers who want a wedge that\'s hard to mis-hit. Wide sole and low center of gravity make it forgiving from any lie. Not for experienced players — this is the wedge you hand someone who has never chipped before.',
        skill: [0], conditions: [0,1,2,3], shotTypes: [0,3], grind: [0,3], budget: ['entry'] }
    ]
  },

  // ── PUTTERS ──────────────────────────────────────────────────────────────────
  putter: {
    questions: [
      {
        id: 'stroke',
        type: 'options',
        question: 'What\'s your putting stroke type?',
        sub: 'The arc of your stroke is the single most important factor in putter selection.',
        options: [
          { icon: '🔄', label: 'Strong arc (opens and closes naturally)', desc: 'Face significantly opens on backstroke' },
          { icon: '↩️', label: 'Slight arc', desc: 'Small amount of face rotation' },
          { icon: '⬆️', label: 'Straight back / straight through', desc: 'Face stays square throughout' },
          { icon: '🤷', label: 'Not sure', desc: 'Haven\'t analyzed my stroke' }
        ]
      },
      {
        id: 'headShape',
        type: 'options',
        question: 'Head shape preference?',
        options: [
          { icon: '🗡️', label: 'Blade', desc: 'Classic, thin, direct feedback' },
          { icon: '🔲', label: 'Mallet', desc: 'Larger head, more forgiveness and alignment help' },
          { icon: '📐', label: 'Mid-mallet / fang', desc: 'Best of both worlds' },
          { icon: '🤷', label: 'Open to any shape', desc: 'Just help me putt better' }
        ]
      },
      {
        id: 'weakness',
        type: 'options',
        question: 'What\'s your biggest putting issue?',
        options: [
          { icon: '📏', label: 'Distance control on long putts', desc: 'Three-putting from distance' },
          { icon: '🎯', label: 'Missing short putts (inside 6 feet)', desc: 'Converting what should be easy' },
          { icon: '↔️', label: 'Face angle at impact', desc: 'Pushing or pulling off line' },
          { icon: '😵', label: 'General inconsistency', desc: 'No reliable pattern to misses' }
        ]
      },
      {
        id: 'putterFeel',
        type: 'options',
        question: 'Feel preference off the face?',
        options: [
          { icon: '🧈', label: 'Soft insert', desc: 'Muted feel, ball rolls smoothly' },
          { icon: '🔩', label: 'Pure milled steel', desc: 'Firm feedback — feel exactly where you made contact' },
          { icon: '⚖️', label: 'Somewhere in between', desc: 'Balanced feel with some feedback' },
          { icon: '🤷', label: 'No preference', desc: 'Haven\'t noticed a difference yet' }
        ]
      }
    ],
    products: [
      { name: 'Scotty Cameron Studio Style Newport 2', price: '$449', url: 'https://www.scottycameron.com', tags: ['Best Blade 2026', 'Tour Standard', 'Pure Milled'],
        desc: 'Today\'s Golfer\'s top blade putter, highest scores in feedback and looks. "In every area, this is a great putter." One of three blades awarded the highest possible tester score. The gold standard for feel-first players. Tiger Woods played a variant for most of his career.',
        stroke: [0,1], headShape: [0,3], weakness: [1,2,3], putterFeel: [1,2], budget: ['premium'] },

      { name: 'Scotty Cameron Studio Style Newport 2.5 Plus', price: '$449', url: 'https://www.scottycameron.com', tags: ['Wide Blade', 'Alignment Aid', 'Best Wide Blade'],
        desc: 'Today\'s Golfer\'s best wide blade. Rolls the ball very well, improved alignment vs. standard Newport 2. Slightly larger footprint adds stability without losing blade feel. Best for players who want Cameron precision with a bit more help at address.',
        stroke: [0,1,2], headShape: [0,2,3], weakness: [2,3], putterFeel: [1,2], budget: ['premium'] },

      { name: 'Odyssey Ai-One Silver Milled Two', price: '$349', url: 'https://www.odysseygolf.com', tags: ['Blade', 'AI Insert', 'Outstanding Roll'],
        desc: 'Second-best blade in Today\'s Golfer\'s 72-putter test. AI-One insert delivers amazing feedback and remarkable roll. One tester gave it the highest score ever awarded to a blade putter. Premium performance at $100 less than Scotty.',
        stroke: [0,1], headShape: [0,3], weakness: [1,2,3], putterFeel: [0,2], budget: ['mid','premium'] },

      { name: 'Mizuno M.Craft Osaka', price: '$299', url: 'https://www.mizunogolf.com', tags: ['Best Overall Blade', 'All Distances', 'MyGolfSpy #1 Blade'],
        desc: 'MyGolfSpy\'s best overall blade in 2026 testing. Best short-putt performance (-6.5) AND best total across short, medium, and long distances (-5.5 overall). The most complete blade tested — no weak category.',
        stroke: [0,1], headShape: [0,3], weakness: [0,1,2,3], putterFeel: [1,2], budget: ['mid'] },

      { name: 'Bettinardi BB-8W', price: '$399', url: 'https://www.bettinardi.com', tags: ['Best Medium Range', 'Honeycomb Face', 'Premium Milled'],
        desc: 'MyGolfSpy\'s best blade for medium-range putts (-2.5) and a strong long-putt performer (-8.9). Honeycomb face milling creates feel that\'s uniquely difficult to describe until you\'ve used it. A serious putter for dedicated putters.',
        stroke: [0,1], headShape: [0,3], weakness: [0,1,3], putterFeel: [1,2], budget: ['premium'] },

      { name: 'PING Scottsdale Anser 2D', price: '$279', url: 'https://www.ping.com', tags: ['Best Long Putts', 'Classic Shape', 'Distance Control'],
        desc: 'MyGolfSpy\'s best blade for long putts (-9.3 PuttView Handicap) — the clear long-putt specialist. If three-putts from distance are your biggest problem, this is the blade to try. Based on the Anser — the winningest putter head shape in golf history.',
        stroke: [0,1], headShape: [0,3], weakness: [0,3], putterFeel: [1,2], budget: ['mid'] },

      { name: 'TaylorMade Spider Tour X', price: '$399', url: 'https://www.taylormadegolf.com', tags: ['Best Mallet 2026', 'Tour Winner', 'Best Roll + Alignment'],
        desc: 'Won Today\'s Golfer\'s mallet test — best roll AND best alignment (4.57/5.0, highest of every putter tested). Won the 2025 Masters and PGA Championship. Used by Scottie Scheffler and Rory McIlroy. Maximum consistency from a tour-proven design.',
        stroke: [1,2,3], headShape: [1,2,3], weakness: [2,3], putterFeel: [0,2], budget: ['mid','premium'] },

      { name: 'TaylorMade Spider GT Rollback', price: '$249', url: 'https://www.taylormadegolf.com', tags: ['Best Value Mallet', 'Forgiving', 'Strong MOI'],
        desc: 'The Golfing Lad: "best combination of forgiveness and technology without paying Scotty money." Pure Path technology, impressive MOI, face-balanced. Best mallet for players who want tour-level forgiveness at a fair price.',
        stroke: [2,3], headShape: [1,2,3], weakness: [2,3], putterFeel: [0,2], budget: ['mid'] },

      { name: 'Scotty Cameron Phantom 11R OC', price: '$549', url: 'https://www.scottycameron.com', tags: ['Mallet', 'Zero Torque', 'Premium Cameron Feel'],
        desc: 'Zero-torque Cameron that still feels like a Scotty — remarkable since most low-torque putters feel dead. Chain-link milling delivers consistent ball speed. For Cameron loyalists who want zero-torque technology without sacrificing the brand\'s signature feel.',
        stroke: [2,3], headShape: [1,3], weakness: [2,3], putterFeel: [1,2], budget: ['premium'] },

      { name: 'PING Scottsdale Prime Oslo', price: '$399', url: 'https://www.ping.com', tags: ['Premium Mallet', 'Engineered', 'Custom Fitting'],
        desc: '303 stainless steel milled to exacting tolerances — same grade used by Scotty Cameron. PLD (Putting Lab Design) line with genuine customization options. The Golfing Lad: "one of the most impressive pieces of engineering in golf right now."',
        stroke: [1,2,3], headShape: [1,2,3], weakness: [0,1,2,3], putterFeel: [1,2], budget: ['premium'] },

      { name: 'PING Scottsdale Prime Tyne 4', price: '$349', url: 'https://www.ping.com', tags: ['Fang Mallet', 'Mid-Mallet', 'Strong Alignment'],
        desc: 'Today\'s Golfer\'s second-best mallet. Fang-style mid-mallet with exceptional roll score (4.43). Strong alignment for players who want a fang design at a competitive price.',
        stroke: [1,2,3], headShape: [2,3], weakness: [2,3], putterFeel: [1,2], budget: ['mid','premium'] },

      { name: 'PING Scottsdale Oslo 3', price: '$299', url: 'https://www.ping.com', tags: ['Deep Mallet', 'Easy to Use', 'Consistent'],
        desc: 'One tester gave it a perfect score across every category — one of only four putters in a 72-putter test to achieve this. Scored identically in every category (3.86 each). "Practically putts the ball itself." For golfers who want a dependable, uncomplicated mallet.',
        stroke: [1,2,3], headShape: [1,3], weakness: [2,3], putterFeel: [0,2], budget: ['mid'] },

      { name: 'Odyssey Ai-One Jailbird Mini Slant', price: '$349', url: 'https://www.odysseygolf.com', tags: ['Best Looking Mallet', 'Zero Torque', 'Alignment Focused'],
        desc: 'Today\'s Golfer\'s "best-looking mallet." AI-designed face with lie-angle-balanced zero-torque construction eliminates face rotation at impact. Half-ball design frames the golf ball to help center contact. Best for players who fight face angle at impact.',
        stroke: [2,3], headShape: [1,2,3], weakness: [2,3], putterFeel: [0,2], budget: ['mid','premium'] },

      { name: 'L.A.B. Golf MEZZ.1 MAX', price: '$449', url: 'https://www.labgolf.com', tags: ['Zero Torque', 'Zero Face Rotation', 'Adam Scott\'s Putter'],
        desc: 'Used by Adam Scott, Will Zalatoris, Lucas Glover. Lie Angle Balance technology eliminates all face rotation from the stroke. Best for players willing to invest in fundamentally different technology to solve face-angle inconsistency.',
        stroke: [2,3], headShape: [1,3], weakness: [2,3], putterFeel: [1,2], budget: ['premium'] },

      { name: 'Odyssey White Hot OG #7', price: '$149', url: 'https://www.odysseygolf.com', tags: ['Best-Selling Putter', 'Classic', 'All Handicaps'],
        desc: 'The best-selling putter of all time — brought back by demand. White Hot insert is one of the most storied feel technologies in the game. Tour-level performance at an accessible price. Works for beginners to single-digit players.',
        stroke: [0,1,2,3], headShape: [1,2,3], weakness: [0,1,2,3], putterFeel: [0,2], budget: ['entry','mid'] },

      { name: 'Cleveland HB Soft Milled', price: '$119', url: 'https://www.clevelandgolf.com', tags: ['Best Value Blade', 'Toe-Hang', 'Arc Stroke'],
        desc: 'Breaking Eighty: "Tour-quality milling for a fraction of the price." Best budget pick for arc-stroke players. Toe-hang design suited for a natural arc. If you\'ve always wanted a milled putter but couldn\'t stomach premium prices, this is your entry point.',
        stroke: [0,1], headShape: [0,2,3], weakness: [1,2,3], putterFeel: [1,2], budget: ['entry'] },

      { name: 'PING Scottsdale DS72', price: '$249', url: 'https://www.ping.com', tags: ['Mid-Mallet', 'Alignment Insert', 'Straight Stroke'],
        desc: 'Ball-width insert matches the ball-width cavity to make aiming easier. Perpendicular visual cues help square the face. Best for golfers with a straight stroke who want mallet-level forgiveness without a full-sized head.',
        stroke: [2,3], headShape: [2,3], weakness: [2,3], putterFeel: [0,2], budget: ['mid'] },

      { name: 'TaylorMade Spider 5K-ZT', price: '$499', url: 'https://www.taylormadegolf.com', tags: ['Zero Torque', 'Face Balanced', 'Center Shaft'],
        desc: 'New zero-torque Spider with Pure Roll Insert and center-shaft design. Takes your hands out of the stroke for more consistent results. Best TaylorMade option for players who want zero-torque technology in a familiar brand.',
        stroke: [2,3], headShape: [1,2,3], weakness: [2,3], putterFeel: [0,2], budget: ['premium'] }
    ]
  },

  // ── GOLF BALLS ───────────────────────────────────────────────────────────────
  ball: {
    questions: [
      {
        id: 'ballSwingSpeed',
        type: 'options',
        question: 'What\'s your driver swing speed?',
        sub: 'This is the single most important ball-selection variable. Wrong compression = lost distance and poor feel.',
        options: [
          { icon: '🐢', label: 'Under 85 mph', desc: 'Soft compression needed — premium tour balls will cost you distance' },
          { icon: '⛳', label: '85–95 mph', desc: 'Mid-compression options unlock. Tour balls start to work here.' },
          { icon: '💪', label: '95–105 mph', desc: 'Full range of tour balls. Focus on distance vs. feel preference.' },
          { icon: '🔥', label: '105+ mph', desc: 'Firm, high-compression balls designed for fast swings.' }
        ]
      },
      {
        id: 'ballPriority',
        type: 'options',
        question: 'What do you want most from a golf ball?',
        options: [
          { icon: '💨', label: 'Maximum distance off the tee', desc: 'Yards over everything else' },
          { icon: '🎯', label: 'Greenside spin and control', desc: 'Stop the ball on the green on demand' },
          { icon: '⚖️', label: 'Balanced tee-to-green performance', desc: 'Distance AND short game — full package' },
          { icon: '🧈', label: 'Soft feel throughout the bag', desc: 'Putts feel better, feedback is priority' }
        ]
      },
      {
        id: 'ballHandicap',
        type: 'options',
        question: 'What\'s your scoring range?',
        options: [
          { icon: '🔰', label: 'Over 95', desc: 'Ball choice matters less — technique matters more' },
          { icon: '⛳', label: '85–95', desc: 'Mid-tier balls are worth investing in' },
          { icon: '🎯', label: '75–85', desc: 'Tour-performance balls start paying off here' },
          { icon: '⭐', label: 'Under 75', desc: 'Spin separation and precision matter at this level' }
        ]
      },
      {
        id: 'ballBudget',
        type: 'options',
        question: 'How many balls do you lose per round?',
        sub: 'Be honest — expensive balls in the water are expensive mistakes.',
        options: [
          { icon: '🌊', label: '4+ per round', desc: 'Value balls make more sense — stop buying Pro V1s to lose them' },
          { icon: '🏌️', label: '2–3 per round', desc: 'Mid-tier is the sweet spot' },
          { icon: '⛳', label: '1 or fewer', desc: 'Invest in a premium ball — you\'ll get full value from it' },
          { icon: '🎯', label: 'I almost never lose balls', desc: 'Premium performance fully justified' }
        ]
      }
    ],
    products: [
      { name: 'Titleist Pro V1', price: '$55/dozen', url: 'https://www.titleist.com', tags: ['#1 Tour Ball', 'Soft Feel', 'High Stopping Power'],
        desc: 'Most-played ball on PGA Tour. 3-piece construction with a urethane cover. Gold standard for stopping power — outperforms Chrome Tour significantly for greenside spin, higher apex, and steeper descent. The ball when short-game control matters more than total distance.',
        ballSwingSpeed: [2,3], ballPriority: [1,2,3], ballHandicap: [2,3], ballBudget: [1,2,3], budget: ['premium'] },

      { name: 'Titleist Pro V1x', price: '$55/dozen', url: 'https://www.titleist.com', tags: ['Tour Ball', 'Higher Launch', 'Higher Spin'],
        desc: '4-piece vs. V1\'s 3-piece. 2026 upgrade: 0.5 mph faster, 3 yards more carry. Slightly firmer feel. Better choice if you want more spin on full iron shots. Higher-performing version of an already great ball — best for the 105+ mph player.',
        ballSwingSpeed: [2,3], ballPriority: [1,2], ballHandicap: [2,3], ballBudget: [2,3], budget: ['premium'] },

      { name: 'Callaway Chrome Tour 2026', price: '$58/dozen', url: 'https://www.callawaygolf.com', tags: ['Longest Tour Ball', 'New 2026', 'Fast Mantle'],
        desc: 'New Tour Fast Mantle for 2026 — stiffer middle layer generates more ball speed without firming the feel. Longest ball in Today\'s Golfer\'s 62-model robot test at 163.7 mph / 286.2 yards carry at 114 mph. Lower-spinning than Pro V1 off the tee but competitive greenside.',
        ballSwingSpeed: [2,3], ballPriority: [0,2], ballHandicap: [2,3], ballBudget: [2,3], budget: ['premium'] },

      { name: 'Callaway Chrome Tour X', price: '$58/dozen', url: 'https://www.callawaygolf.com', tags: ['High Spin', 'Tour Ball', 'Attack Pins'],
        desc: 'Highest-spinning Callaway tour model — spins on command on approach shots. MyGolfSpy: "highest measured greenside spin of all Titleist and Callaway models tested." Best for high-speed players who want to throw darts at pins and stop the ball aggressively.',
        ballSwingSpeed: [2,3], ballPriority: [1,2], ballHandicap: [2,3], ballBudget: [2,3], budget: ['premium'] },

      { name: 'TaylorMade TP5 (2026)', price: '$50/dozen', url: 'https://www.taylormadegolf.com', tags: ['5-Layer', 'Rory McIlroy\'s Ball', 'Soft + Spinny'],
        desc: 'Rory McIlroy\'s ball since start of 2025. Updated 2026 Tour Flight dimple pattern stops ballooning. 5-layer construction separates spin by shot type — low spin off the driver, high spin with wedges. Outstanding around the greens.',
        ballSwingSpeed: [1,2,3], ballPriority: [1,2,3], ballHandicap: [2,3], ballBudget: [2,3], budget: ['mid','premium'] },

      { name: 'TaylorMade TP5x (2026)', price: '$50/dozen', url: 'https://www.taylormadegolf.com', tags: ['5-Layer', 'Firm Feel', 'High Speed'],
        desc: 'Firmer, lower-spinning version of the TP5. Ideal for faster swingers who want 5-layer technology with a more compact ball flight. Higher-launching than TP5 off the driver. Best for 105+ mph players who want spin separation.',
        ballSwingSpeed: [3], ballPriority: [0,2], ballHandicap: [2,3], ballBudget: [2,3], budget: ['mid','premium'] },

      { name: 'Bridgestone Tour B X 2026', price: '$49/dozen', url: 'https://www.bridgestonegolf.com', tags: ['Best for 105+ mph', 'Longest 2026', 'VeloSurge'],
        desc: 'Two PGA Tour wins in first 10 events of 2026. New VeloSurge core-mantle integration for more ball speed at high swing speeds. Golf Monthly tester averaged 303 yards — 5 yards further than Pro V1 with tighter dispersion. Best ball for fast swingers who prioritize distance.',
        ballSwingSpeed: [3], ballPriority: [0,2], ballHandicap: [2,3], ballBudget: [2,3], budget: ['mid','premium'] },

      { name: 'Srixon Z-Star Diamond', price: '$46/dozen', url: 'https://www.srixon.com', tags: ['Distance Off Tee', 'Tour Ball', 'High Speed'],
        desc: 'Excelled off the tee in Golf Monthly high-swing-speed testing. Strong tee-to-green performance for faster players. Slightly harder to generate spin around the greens vs. Z-Star XV. Best Srixon option for distance-focused players who still want a legitimate tour ball.',
        ballSwingSpeed: [2,3], ballPriority: [0,2], ballHandicap: [2,3], ballBudget: [1,2,3], budget: ['mid','premium'] },

      { name: 'Srixon Z-Star XV', price: '$46/dozen', url: 'https://www.srixon.com', tags: ['Tour Ball', 'Balanced', 'Value vs Titleist'],
        desc: 'Tour-level ball at $9 less per dozen than Pro V1. Frequently tested alongside Pro V1 in the same tier. Best balance of premium tour performance and value. The pick for the golfer who wants Pro V1 quality without the Pro V1 price.',
        ballSwingSpeed: [2,3], ballPriority: [1,2,3], ballHandicap: [2,3], ballBudget: [1,2,3], budget: ['mid','premium'] },

      { name: 'Vice Pro', price: '$33/dozen', url: 'https://www.vicegolf.com', tags: ['Best Tour Value', 'Direct-to-Consumer', 'Urethane Cover'],
        desc: 'Germany-based DTC brand bypasses retail markup entirely. Genuine urethane-cover tour ball that consistently tests alongside balls costing twice as much. Best option if you want tour-ball performance without paying $50/dozen. Buy in bulk packs for maximum discount.',
        ballSwingSpeed: [1,2,3], ballPriority: [1,2,3], ballHandicap: [1,2,3], ballBudget: [0,1,2], budget: ['entry','mid'] },

      { name: 'TaylorMade Tour Response', price: '$35/dozen', url: 'https://www.taylormadegolf.com', tags: ['Mid-Tier', 'Urethane', '85 Compression'],
        desc: '85 compression makes it ideal for 85–100 mph swing speeds. Urethane cover delivers real greenside spin at an accessible price. Strong choice for the improving golfer who wants tour-ball feel without committing to $50/dozen.',
        ballSwingSpeed: [1,2], ballPriority: [1,2,3], ballHandicap: [1,2], ballBudget: [0,1,2], budget: ['entry','mid'] },

      { name: 'Titleist Tour Soft', price: '$30/dozen', url: 'https://www.titleist.com', tags: ['Mid-Tier', 'Soft Feel', 'Titleist Quality'],
        desc: '72 compression — softer than Pro V1, works at lower swing speeds. Titleist\'s accessible mid-tier with the same quality control as their premium line. Reliable for 75–95 mph players who value Titleist quality without the Pro V1 price.',
        ballSwingSpeed: [0,1,2], ballPriority: [2,3], ballHandicap: [0,1,2], ballBudget: [0,1,2], budget: ['entry','mid'] },

      { name: 'Srixon Q-Star Tour', price: '$29/dozen', url: 'https://www.srixon.com', tags: ['Mid-Tier', 'Urethane', 'Best Greenside Value'],
        desc: 'Urethane cover at a mid-tier price — more greenside spin than most balls in this range. Consistently rated best-in-class value for golfers in the 85–95 mph range. The pick if you want real urethane feel on a budget.',
        ballSwingSpeed: [1,2], ballPriority: [1,2,3], ballHandicap: [1,2], ballBudget: [0,1,2], budget: ['entry','mid'] },

      { name: 'Callaway Supersoft 2026', price: '$25/dozen', url: 'https://www.callawaygolf.com', tags: ['Low Compression', 'Best for Beginners', 'High Handicap'],
        desc: 'Lowest compression in the Callaway lineup (35-38 compression) — maximum energy transfer at slower swing speeds. Best ball for beginners and golfers shooting over 95. Playing a Pro V1 at this speed costs you distance. Start here.',
        ballSwingSpeed: [0,1], ballPriority: [0,2], ballHandicap: [0,1], ballBudget: [0,1,2,3], budget: ['entry'] },

      { name: 'Srixon Soft Feel', price: '$27/dozen', url: 'https://www.srixon.com', tags: ['Low Compression', 'Budget', 'Slow Swing Speed'],
        desc: '60 compression transfers energy efficiently at slower swing speeds. Budget-friendly option that consistently outperforms its price. Best for golfers under 85 mph who want reliability without spending on premium tour balls that won\'t compress properly.',
        ballSwingSpeed: [0,1], ballPriority: [0,2,3], ballHandicap: [0,1], ballBudget: [0,1,2], budget: ['entry'] },

      { name: 'Titleist TruFeel', price: '$25/dozen', url: 'https://www.titleist.com', tags: ['60 Compression', 'Soft Feel', 'Beginner to Mid'],
        desc: '60 compression with soft feel throughout. Titleist\'s entry point with the same quality control as their premium line. Better short-game performance than many comparable budget balls. Solid choice for sub-90 mph swingers who value Titleist reliability.',
        ballSwingSpeed: [0,1], ballPriority: [2,3], ballHandicap: [0,1], ballBudget: [0,1,2], budget: ['entry'] },

      { name: 'Titleist Velocity', price: '$32/dozen', url: 'https://www.titleist.com', tags: ['Distance Ball', '2-Piece', 'All Swing Speeds'],
        desc: 'Robot test: Velocity outperformed Pro V1x for carry distance — it\'s a pure distance design. Low-compression two-piece that also surprised in short-game testing. For golfers who chase distance first and don\'t need greenside spin as a primary concern.',
        ballSwingSpeed: [0,1,2], ballPriority: [0], ballHandicap: [0,1,2], ballBudget: [0,1,2], budget: ['entry','mid'] },

      { name: 'Callaway Chrome Soft', price: '$40/dozen', url: 'https://www.callawaygolf.com', tags: ['Soft Feel', 'Tour Tech', 'Mid Compression'],
        desc: '75 compression — softer than Chrome Tour with the same urethane cover and tour-level construction. For golfers who want Callaway\'s tour technology in a softer package. Better feel off the putter and around the greens than firmness-optimized models.',
        ballSwingSpeed: [0,1,2], ballPriority: [2,3], ballHandicap: [1,2], ballBudget: [0,1,2], budget: ['mid'] },

      { name: 'Titleist AVX', price: '$48/dozen', url: 'https://www.titleist.com', tags: ['Low Flight', 'Low Spin', 'Soft Feel'],
        desc: 'Low-spinning, low-flying alternative to Pro V1. Great for skilled golfers who want to flight the ball under wind and prefer a softer feel. Outstanding at moderate and faster swing speeds. The Titleist option for players who find the Pro V1 trajectory too high.',
        ballSwingSpeed: [1,2,3], ballPriority: [0,3], ballHandicap: [2,3], ballBudget: [1,2,3], budget: ['mid','premium'] },

      { name: 'Seed SD-02', price: '$38/dozen', url: 'https://www.seedgolfballs.com', tags: ['DTC Tour Ball', 'Best DTC Off Tee', 'Value Premium'],
        desc: 'Today\'s Golfer: "best-performing direct-to-consumer ball off the tee." Designed to compete with Pro V1x — and based on robot testing, it largely does. Best option for golfers who want premium-performing DTC ball without big-brand pricing.',
        ballSwingSpeed: [2,3], ballPriority: [0,2], ballHandicap: [2,3], ballBudget: [0,1,2], budget: ['mid'] }
    ]
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// GEAR CATEGORIES + COURSES
// ─────────────────────────────────────────────────────────────────────────────

const GEAR_CATEGORIES = [
  { id: 'driver',  icon: '🏌️', label: 'Driver',    desc: 'Off-the-tee distance and accuracy' },
  { id: 'irons',   icon: '⛳',  label: 'Irons',     desc: 'Approach play and consistency' },
  { id: 'wedges',  icon: '🎯',  label: 'Wedges',    desc: 'Scoring shots and short game' },
  { id: 'putter',  icon: '🏁',  label: 'Putter',    desc: 'Where rounds are saved or lost' },
  { id: 'ball',    icon: '⚪',  label: 'Golf Ball',  desc: 'The one club every single shot' }
];

const COURSES = [
  { name: 'Brookstone Golf & Country Club', distance: '2.3 mi', price: '$$$', difficulty: 'Challenging',       diffClass: 'difficulty-hard', rating: 4.7, holes: 18, desc: 'Parkland-style layout with tight fairways and fast greens. Best for 10-handicap and below.', bookUrl: 'https://www.golfnow.com' },
  { name: 'Meadow Creek Golf Course',        distance: '4.1 mi', price: '$$',  difficulty: 'Moderate',          diffClass: 'difficulty-mid',  rating: 4.3, holes: 18, desc: 'Forgiving layout with wide fairways and manageable hazards. Good for mid-handicappers looking to score.', bookUrl: 'https://www.teeitup.com' },
  { name: 'Pines Municipal Golf',            distance: '5.7 mi', price: '$',   difficulty: 'Beginner-Friendly', diffClass: 'difficulty-easy', rating: 4.0, holes: 18, desc: 'Open, accessible layout with minimal hazards. Great for beginners and casual rounds without a wallet hit.', bookUrl: 'https://www.golf18network.com' },
  { name: 'Summit Ridge Links',              distance: '7.2 mi', price: '$$$', difficulty: 'Championship',      diffClass: 'difficulty-hard', rating: 4.9, holes: 18, desc: 'Championship-caliber layout with significant elevation and water on 8 holes. Bucket-list worthy for low handicappers.', bookUrl: 'https://www.golfnow.com' },
  { name: 'Fairview Crossings Par-3',        distance: '1.8 mi', price: '$',   difficulty: 'Beginner-Friendly', diffClass: 'difficulty-easy', rating: 4.1, holes: 9,  desc: 'Par-3 course perfect for practice or a quick 9. No tee time required most weekday mornings.', bookUrl: 'https://www.teeoff.com' }
];

// ─────────────────────────────────────────────────────────────────────────────
// SCORING ENGINE
// Each product has filter attributes mapping to quiz answer indices.
// A product scores 1 point per matching answer. Budget is a hard filter.
// Top 4 scoring products are returned as results.
// ─────────────────────────────────────────────────────────────────────────────

function scoreProducts(catId, answers, budget) {
  const products  = DB[catId].products;
  const questions = DB[catId].questions;

  return products
    .filter(p => p.budget.includes(budget))
    .map(p => {
      let score = 0;
      questions.forEach(q => {
        const answer   = answers[q.id];
        if (answer === undefined) return;
        const matchList = p[q.id];
        if (matchList && matchList.includes(answer)) score++;
      });
      return { ...p, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);
}

// ─────────────────────────────────────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────────────────────────────────────

let state = {
  screen: 'home',
  activeTab: 'gear',
  selectedCategory: null,
  answers: {},
  quizStep: 0,
  budget: null,
  sliderVal: {}
};

// ─────────────────────────────────────────────────────────────────────────────
// RENDER
// ─────────────────────────────────────────────────────────────────────────────

function render() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = `<div class="header-logo">Caddie<span>AI</span></div><div class="header-sub">Your virtual caddie</div>`;
  app.appendChild(header);

  if      (state.screen === 'home')    renderHome(app);
  else if (state.screen === 'quiz')    renderQuiz(app);
  else if (state.screen === 'budget')  renderBudget(app);
  else if (state.screen === 'results') renderResults(app);
}

function navTabs() {
  return `<div class="nav-tabs">
    <button class="nav-tab ${state.activeTab === 'gear'    ? 'active' : ''}" onclick="switchTab('gear')">Find Gear</button>
    <button class="nav-tab ${state.activeTab === 'courses' ? 'active' : ''}" onclick="switchTab('courses')">Find Courses</button>
  </div>`;
}

function renderHome(app) {
  app.insertAdjacentHTML('beforeend', navTabs());

  if (state.activeTab === 'courses') { renderCourses(app); return; }

  const content = document.createElement('div');
  content.className = 'content';
  content.innerHTML = `
    <div class="home-hero">
      <h2>What are we shopping for today?</h2>
      <p>Answer a few questions and get specific recommendations — not a generic top-ten list.</p>
    </div>
    <div class="section-label">Choose a category</div>
    <div class="gear-grid" id="gear-grid"></div>
  `;
  app.appendChild(content);

  const grid = document.getElementById('gear-grid');
  GEAR_CATEGORIES.forEach((cat, i) => {
    const card = document.createElement('button');
    card.className = `gear-card${i === 4 ? ' featured' : ''}`;
    if (i === 4) {
      card.innerHTML = `<span class="gear-icon">${cat.icon}</span><div><h3>${cat.label}</h3><p>${cat.desc}</p></div>`;
    } else {
      card.innerHTML = `<span class="gear-icon">${cat.icon}</span><h3>${cat.label}</h3><p>${cat.desc}</p>`;
    }
    card.onclick = () => startQuiz(cat.id);
    grid.appendChild(card);
  });
}

function renderCourses(app) {
  const content = document.createElement('div');
  content.className = 'courses-content';

  let html = `
    <div class="section-label" style="margin-bottom:14px;">Golf courses near you</div>
    <div class="search-box">
      <input type="text" class="search-input" placeholder="Enter zip code or city..." id="zip-input">
      <button class="search-btn" onclick="handleSearch()">Search</button>
    </div>
  `;

  COURSES.forEach(c => {
    const stars = '★'.repeat(Math.floor(c.rating));
    html += `
      <div class="course-card">
        <div class="course-top">
          <div class="course-name">${c.name}</div>
          <div class="course-price">${c.price}</div>
        </div>
        <div class="course-meta">
          <span><span class="course-star">${stars}</span>&nbsp;${c.rating}</span>
          <span>📍 ${c.distance}</span>
          <span>⛳ ${c.holes} holes</span>
          <span class="${c.diffClass}">● ${c.difficulty}</span>
        </div>
        <div class="course-desc">${c.desc}</div>
        <div class="course-actions">
          <button class="course-btn-sm primary" onclick="openLink('${c.bookUrl}')">Book Tee Time</button>
          <button class="course-btn-sm ghost" onclick="openLink('https://maps.google.com?q=${encodeURIComponent(c.name)}')">Get Directions</button>
        </div>
      </div>
    `;
  });

  content.innerHTML = html;
  app.appendChild(content);
}

function renderQuiz(app) {
  app.insertAdjacentHTML('beforeend', navTabs());
  app.querySelectorAll('.nav-tab').forEach(t => {
    t.onclick = () => { state.screen = 'home'; state.activeTab = t.textContent.includes('Gear') ? 'gear' : 'courses'; render(); };
  });

  const category  = DB[state.selectedCategory];
  const questions = category.questions;
  const totalSteps = questions.length + 1;
  const q = questions[state.quizStep];
  const catInfo = GEAR_CATEGORIES.find(g => g.id === state.selectedCategory);

  const content = document.createElement('div');
  content.className = 'content';

  let dots = '';
  for (let i = 0; i < totalSteps; i++) {
    const cls = i < state.quizStep ? 'done' : i === state.quizStep ? 'active' : '';
    dots += `<div class="progress-dot ${cls}"></div>`;
  }

  let html = `
    <div class="quiz-progress">${dots}</div>
    <div class="quiz-category-badge">${catInfo.icon} ${catInfo.label}</div>
    <div class="quiz-question">${q.question}</div>
    ${q.sub ? `<div class="quiz-sub">${q.sub}</div>` : '<div style="margin-bottom:24px;"></div>'}
  `;

  if (q.type === 'options') {
    html += '<div class="option-list">';
    q.options.forEach((opt, i) => {
      const sel = state.answers[q.id] === i;
      html += `
        <button class="option-btn ${sel ? 'selected' : ''}" onclick="selectOption('${q.id}', ${i})">
          <span class="option-icon">${opt.icon}</span>
          <div>
            <div class="option-label">${opt.label}</div>
            ${opt.desc ? `<div class="option-desc">${opt.desc}</div>` : ''}
          </div>
        </button>`;
    });
    html += '</div>';
  } else if (q.type === 'slider') {
    const cur = state.sliderVal[q.id] !== undefined ? state.sliderVal[q.id] : q.defaultVal;
    html += `
      <div class="slider-wrap">
        <div class="slider-val" id="slider-display">${cur} ${q.unit}</div>
        <input type="range" min="${q.min}" max="${q.max}" value="${cur}"
          oninput="updateSlider(this.value,'${q.id}','${q.unit}')"
          onchange="updateSlider(this.value,'${q.id}','${q.unit}')">
        <div class="slider-labels"><span>${q.min} ${q.unit}</span><span>${q.max} ${q.unit}</span></div>
      </div>`;
    if (state.answers[q.id] === undefined) {
      state.answers[q.id] = q.defaultVal;
      state.sliderVal[q.id] = q.defaultVal;
    }
  }

  content.innerHTML = html;
  app.appendChild(content);

  const canProgress = state.answers[q.id] !== undefined;
  const isLast = state.quizStep === questions.length - 1;

  const bar = document.createElement('div');
  bar.className = 'bottom-bar';
  bar.innerHTML = `
    <button class="btn-back" onclick="goBack()">← Back</button>
    <button class="btn-next" ${canProgress ? '' : 'disabled'} onclick="goNext()">
      ${isLast ? 'Set Budget →' : 'Next →'}
    </button>`;
  app.appendChild(bar);
}

function renderBudget(app) {
  app.insertAdjacentHTML('beforeend', navTabs());

  const category   = DB[state.selectedCategory];
  const totalSteps = category.questions.length + 1;
  const catInfo    = GEAR_CATEGORIES.find(g => g.id === state.selectedCategory);

  let dots = '';
  for (let i = 0; i < totalSteps; i++) {
    dots += `<div class="progress-dot ${i < totalSteps - 1 ? 'done' : 'active'}"></div>`;
  }

  const budgets = [
    { id: 'entry',   badge: '$',   label: 'Entry',     sub: 'Performance without the premium markup' },
    { id: 'mid',     badge: '$$',  label: 'Mid-Range', sub: 'Where most great gear lives' },
    { id: 'premium', badge: '$$$', label: 'Premium',   sub: 'No compromises — best available' }
  ];

  const content = document.createElement('div');
  content.className = 'content';
  let html = `
    <div class="quiz-progress">${dots}</div>
    <div class="quiz-category-badge">${catInfo.icon} ${catInfo.label}</div>
    <div class="quiz-question">What's your budget?</div>
    <div class="quiz-sub">Honest answer here leads to a better recommendation.</div>
    <div class="budget-grid">
  `;
  budgets.forEach(b => {
    html += `
      <button class="budget-card ${state.budget === b.id ? 'selected' : ''}" onclick="selectBudget('${b.id}')">
        <div class="budget-badge">${b.badge}</div>
        <div><div class="budget-title">${b.label}</div><div class="budget-sub">${b.sub}</div></div>
      </button>`;
  });
  html += '</div>';
  content.innerHTML = html;
  app.appendChild(content);

  const bar = document.createElement('div');
  bar.className = 'bottom-bar';
  bar.innerHTML = `
    <button class="btn-back" onclick="goBack()">← Back</button>
    <button class="btn-next" ${state.budget ? '' : 'disabled'} onclick="showResults()">
      See Recommendations →
    </button>`;
  app.appendChild(bar);
}

function renderResults(app) {
  app.insertAdjacentHTML('beforeend', navTabs());

  const catInfo  = GEAR_CATEGORIES.find(g => g.id === state.selectedCategory);
  const products = scoreProducts(state.selectedCategory, state.answers, state.budget);

  const content = document.createElement('div');
  content.className = 'content';

  let html = `
    <div class="results-header">
      <div class="results-icon">${catInfo.icon}</div>
      <h2>Your ${catInfo.label} Picks</h2>
      <p>Matched to your answers and budget. Prices are MSRP — check retailer for current pricing.</p>
    </div>
  `;

  products.forEach((p, i) => {
    const name2 = p.name.split(' ').slice(0, 3).join(' ');
    html += `
      <div class="product-card ${i === 0 ? 'top-pick' : ''}">
        ${i === 0 ? '<div class="top-badge">Best Match</div>' : ''}
        <div class="product-name">${p.name}</div>
        <div class="product-price">${p.price}</div>
        <div class="product-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="product-desc">${p.desc}</div>
        <button class="buy-btn" onclick="openLink('${p.url}')">Shop ${name2} →</button>
      </div>`;
  });

  if (products.length === 0) {
    html += `<div class="restart-box"><p>No matches found for this budget tier. Try a different budget.</p></div>`;
  }

  html += `
    <div class="restart-box">
      <p>Need gear for another category?</p>
      <button class="buy-btn secondary" onclick="resetToHome()">Start Over</button>
    </div>
    <div style="height:16px;"></div>
  `;

  content.innerHTML = html;
  app.appendChild(content);
}

// ─────────────────────────────────────────────────────────────────────────────
// ACTIONS
// ─────────────────────────────────────────────────────────────────────────────

function switchTab(tab)        { state.activeTab = tab; state.screen = 'home'; render(); }
function selectOption(qId, idx) { state.answers[qId] = idx; render(); }
function selectBudget(b)       { state.budget = b; render(); }
function showResults()         { state.screen = 'results'; render(); }
function openLink(url)         { window.open(url, '_blank'); }

function startQuiz(catId) {
  state.selectedCategory = catId;
  state.quizStep  = 0;
  state.answers   = {};
  state.budget    = null;
  state.sliderVal = {};
  state.screen    = 'quiz';
  render();
}

function updateSlider(val, qId, unit) {
  const v = parseInt(val);
  state.answers[qId]   = v;
  state.sliderVal[qId] = v;
  const el = document.getElementById('slider-display');
  if (el) el.textContent = v + ' ' + unit;
}

function goNext() {
  const questions = DB[state.selectedCategory].questions;
  if (state.quizStep < questions.length - 1) { state.quizStep++; render(); }
  else { state.screen = 'budget'; render(); }
}

function goBack() {
  if      (state.screen === 'budget')  { state.screen = 'quiz'; state.quizStep = DB[state.selectedCategory].questions.length - 1; }
  else if (state.screen === 'results') { state.screen = 'budget'; }
  else if (state.quizStep > 0)         { state.quizStep--; }
  else                                 { state.screen = 'home'; state.selectedCategory = null; }
  render();
}

function resetToHome() {
  state.screen = 'home'; state.selectedCategory = null;
  state.answers = {}; state.budget = null; state.quizStep = 0; state.sliderVal = {};
  render();
}

function handleSearch() {
  const input = document.getElementById('zip-input');
  const val = input ? input.value.trim() : '';
  if (val) alert('Searching for courses near: ' + val + '\n\n(Course search coming in a future update.)');
}

render();
