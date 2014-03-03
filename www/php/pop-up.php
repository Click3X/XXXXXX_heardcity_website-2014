<div class="hover-bubble">
    <ul class="pop-up">
    <?php 
        // foreach ($members as $key => $member) { 


        // $key is a temp variable.
        // All items on ingle person page will have a hover-id associated with them
        // When hovered/clicked Javascript will notify code of which items is targeted
        //   via the $key/hover-id
        $key=0; ?>
            
        <li>
            <div class="team-member clearfix">
                <div class="image">
                    <img src="<?php echo $members[$key]['silhouette'];?>" alt="silhouette">
                </div>
                <ul class="member-text">
                    <li class="misc-text">This is <?php echo $members[$key]['name']; ?>'s</li>
                    <li class="name"><?php echo $members[$key]['items'][$key]['name']; ?></li>
                    <li class="bio"><?php echo $members[$key]['items'][$key]['bio']; ?></li>
                    <li class="permalink"><a href="<?php echo $members[$key]['permalink']; ?>">View his stuff</a></li>
                </ul>
            </div>
        </li>

        <?php
        
         // } 
        
        ?>
    </ul>
</div>